"""Space Aliens - Final Project

A small arcade-style alien shooter inspired by the Alien Invasion project from
Python Crash Course, 3rd Edition, chapters 12 through 14.

Run this file to start the game:
    python alien_invasion.py
"""

import sys
from time import sleep

import pygame

from settings import Settings
from game_stats import GameStats
from scoreboard import Scoreboard
from button import Button
from ship import Ship
from bullet import Bullet
from alien import Alien


class AlienInvasion:
    """Overall class to manage game assets and behavior."""

    def __init__(self):
        """Initialize the game and create game resources."""
        pygame.init()
        self.clock = pygame.time.Clock()
        self.settings = Settings()

        # Create the main screen window.
        self.screen = pygame.display.set_mode(
            (self.settings.screen_width, self.settings.screen_height)
        )
        pygame.display.set_caption("Space Aliens")

        # Create game statistics and scoreboard.
        self.stats = GameStats(self)
        self.sb = Scoreboard(self)

        # Create the ship, bullet group, and alien group.
        self.ship = Ship(self)
        self.bullets = pygame.sprite.Group()
        self.aliens = pygame.sprite.Group()

        self._create_fleet()

        # Create the Play button.
        self.play_button = Button(self, "Play")

    def run_game(self):
        """Start the main loop for the game."""
        while True:
            self._check_events()

            if self.stats.game_active:
                self.ship.update()
                self._update_bullets()
                self._update_aliens()

            self._update_screen()
            self.clock.tick(60)

    def _check_events(self):
        """Respond to keyboard and mouse events."""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()
            elif event.type == pygame.KEYDOWN:
                self._check_keydown_events(event)
            elif event.type == pygame.KEYUP:
                self._check_keyup_events(event)
            elif event.type == pygame.MOUSEBUTTONDOWN:
                mouse_pos = pygame.mouse.get_pos()
                self._check_play_button(mouse_pos)

    def _check_keydown_events(self, event):
        """Respond to key presses."""
        if event.key == pygame.K_RIGHT:
            self.ship.moving_right = True
        elif event.key == pygame.K_LEFT:
            self.ship.moving_left = True
        elif event.key == pygame.K_SPACE:
            self._fire_bullet()
        elif event.key == pygame.K_p:
            self._start_game()
        elif event.key == pygame.K_q:
            sys.exit()

    def _check_keyup_events(self, event):
        """Respond to key releases."""
        if event.key == pygame.K_RIGHT:
            self.ship.moving_right = False
        elif event.key == pygame.K_LEFT:
            self.ship.moving_left = False

    def _check_play_button(self, mouse_pos):
        """Start a new game when the player clicks Play."""
        button_clicked = self.play_button.rect.collidepoint(mouse_pos)
        if button_clicked and not self.stats.game_active:
            self._start_game()

    def _start_game(self):
        """Reset the game and start a new round."""
        if not self.stats.game_active:
            # Reset changing game settings.
            self.settings.initialize_dynamic_settings()

            # Reset game statistics.
            self.stats.reset_stats()
            self.stats.game_active = True
            self.sb.prep_score()
            self.sb.prep_level()
            self.sb.prep_ships()

            # Clear leftover aliens and bullets.
            self.bullets.empty()
            self.aliens.empty()

            # Create a new fleet and center the ship.
            self._create_fleet()
            self.ship.center_ship()

            # Hide the mouse cursor while playing.
            pygame.mouse.set_visible(False)

    def _fire_bullet(self):
        """Create a new bullet and add it to the bullets group."""
        if len(self.bullets) < self.settings.bullets_allowed:
            new_bullet = Bullet(self)
            self.bullets.add(new_bullet)

    def _update_bullets(self):
        """Update bullet positions and remove old bullets."""
        self.bullets.update()

        # Remove bullets that have disappeared off the top of the screen.
        for bullet in self.bullets.copy():
            if bullet.rect.bottom <= 0:
                self.bullets.remove(bullet)

        self._check_bullet_alien_collisions()

    def _check_bullet_alien_collisions(self):
        """Respond when bullets hit aliens."""
        collisions = pygame.sprite.groupcollide(self.bullets, self.aliens, True, True)

        if collisions:
            for aliens in collisions.values():
                self.stats.score += self.settings.alien_points * len(aliens)
            self.sb.prep_score()
            self.sb.check_high_score()

        # If the full fleet is destroyed, begin a new level.
        if not self.aliens:
            self.bullets.empty()
            self.settings.increase_speed()
            self.stats.level += 1
            self.sb.prep_level()
            self._create_fleet()

    def _create_fleet(self):
        """Create the fleet of aliens."""
        alien = Alien(self)
        alien_width, alien_height = alien.rect.size

        # Leave space for one alien on each side and the ship at the bottom.
        available_space_x = self.settings.screen_width - (2 * alien_width)
        number_aliens_x = available_space_x // (2 * alien_width)

        ship_height = self.ship.rect.height if hasattr(self, "ship") else 48
        available_space_y = self.settings.screen_height - (3 * alien_height) - ship_height
        number_rows = available_space_y // (2 * alien_height)

        for row_number in range(number_rows):
            for alien_number in range(number_aliens_x):
                self._create_alien(alien_number, row_number)

    def _create_alien(self, alien_number, row_number):
        """Create one alien and place it in the fleet."""
        alien = Alien(self)
        alien_width, alien_height = alien.rect.size
        alien.x = alien_width + 2 * alien_width * alien_number
        alien.rect.x = alien.x
        alien.rect.y = alien_height + 2 * alien_height * row_number
        self.aliens.add(alien)

    def _update_aliens(self):
        """Check if the fleet is at an edge, then update alien positions."""
        self._check_fleet_edges()
        self.aliens.update()

        # Check for collisions between aliens and the ship.
        if pygame.sprite.spritecollideany(self.ship, self.aliens):
            self._ship_hit()

        # Check if any aliens have reached the bottom of the screen.
        self._check_aliens_bottom()

    def _check_fleet_edges(self):
        """Respond if any alien reaches an edge."""
        for alien in self.aliens.sprites():
            if alien.check_edges():
                self._change_fleet_direction()
                break

    def _change_fleet_direction(self):
        """Drop the whole fleet and change its direction."""
        for alien in self.aliens.sprites():
            alien.rect.y += self.settings.fleet_drop_speed
        self.settings.fleet_direction *= -1

    def _ship_hit(self):
        """Respond to the ship being hit by an alien."""
        if self.stats.ships_left > 0:
            # Subtract one ship and update the scoreboard.
            self.stats.ships_left -= 1
            self.sb.prep_ships()

            # Clear bullets and aliens.
            self.bullets.empty()
            self.aliens.empty()

            # Create a new fleet and center the ship.
            self._create_fleet()
            self.ship.center_ship()

            # Pause briefly so the player can see what happened.
            sleep(0.5)
        else:
            self.stats.game_active = False
            pygame.mouse.set_visible(True)

    def _check_aliens_bottom(self):
        """Check if any aliens have reached the bottom of the screen."""
        screen_rect = self.screen.get_rect()
        for alien in self.aliens.sprites():
            if alien.rect.bottom >= screen_rect.bottom:
                self._ship_hit()
                break

    def _update_screen(self):
        """Update images on the screen and flip to the new screen."""
        self.screen.fill(self.settings.bg_color)

        # Draw all game objects.
        self.ship.blitme()
        for bullet in self.bullets.sprites():
            bullet.draw_bullet()
        self.aliens.draw(self.screen)

        # Draw score information.
        self.sb.show_score()

        # Draw the Play button if the game is inactive.
        if not self.stats.game_active:
            self._draw_title_screen()
            self.play_button.draw_button()

        pygame.display.flip()

    def _draw_title_screen(self):
        """Draw simple title and control instructions."""
        title_font = pygame.font.SysFont(None, 78)
        info_font = pygame.font.SysFont(None, 34)

        title_image = title_font.render("Space Aliens", True, (255, 255, 255), self.settings.bg_color)
        title_rect = title_image.get_rect(center=(self.screen.get_rect().centerx, 230))
        self.screen.blit(title_image, title_rect)

        instructions = "Move: Left/Right Arrows   Shoot: Space   Start: P   Quit: Q"
        instructions_image = info_font.render(instructions, True, (210, 220, 240), self.settings.bg_color)
        instructions_rect = instructions_image.get_rect(center=(self.screen.get_rect().centerx, 305))
        self.screen.blit(instructions_image, instructions_rect)


if __name__ == "__main__":
    # Make a game instance and run the game.
    ai = AlienInvasion()
    ai.run_game()
