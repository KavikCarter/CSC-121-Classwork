"""Bullet class for Space Aliens."""

import pygame
from pygame.sprite import Sprite


class Bullet(Sprite):
    """Manage bullets fired from the ship."""

    def __init__(self, ai_game):
        """Create a bullet at the ship's current position."""
        super().__init__()
        self.screen = ai_game.screen
        self.settings = ai_game.settings
        self.color = self.settings.bullet_color

        # Create a bullet rectangle at (0, 0), then move it to the ship.
        self.rect = pygame.Rect(0, 0, self.settings.bullet_width, self.settings.bullet_height)
        self.rect.midtop = ai_game.ship.rect.midtop

        # Store the bullet's y-position as a float for smoother movement.
        self.y = float(self.rect.y)

    def update(self):
        """Move the bullet up the screen."""
        self.y -= self.settings.bullet_speed
        self.rect.y = self.y

    def draw_bullet(self):
        """Draw the bullet to the screen."""
        pygame.draw.rect(self.screen, self.color, self.rect, border_radius=2)
