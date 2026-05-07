"""Alien class for Space Aliens."""

import pygame
from pygame.sprite import Sprite


class Alien(Sprite):
    """Represent one alien in the fleet."""

    def __init__(self, ai_game):
        """Initialize the alien and set its starting position."""
        super().__init__()
        self.screen = ai_game.screen
        self.settings = ai_game.settings

        # Create a simple alien image using Pygame drawing tools.
        self.image = pygame.Surface((58, 42), pygame.SRCALPHA)
        pygame.draw.ellipse(self.image, (95, 225, 130), (4, 5, 50, 30))
        pygame.draw.circle(self.image, (20, 40, 35), (22, 18), 5)
        pygame.draw.circle(self.image, (20, 40, 35), (36, 18), 5)
        pygame.draw.line(self.image, (95, 225, 130), (13, 34), (3, 41), 4)
        pygame.draw.line(self.image, (95, 225, 130), (45, 34), (55, 41), 4)
        pygame.draw.arc(self.image, (20, 40, 35), (19, 20, 20, 12), 0, 3.14, 2)
        self.rect = self.image.get_rect()

        # Start each new alien near the top left of the screen.
        self.rect.x = self.rect.width
        self.rect.y = self.rect.height

        # Store the alien's exact horizontal position.
        self.x = float(self.rect.x)

    def check_edges(self):
        """Return True if the alien is at the edge of the screen."""
        screen_rect = self.screen.get_rect()
        return self.rect.right >= screen_rect.right or self.rect.left <= 0

    def update(self):
        """Move the alien right or left."""
        self.x += self.settings.alien_speed * self.settings.fleet_direction
        self.rect.x = self.x
