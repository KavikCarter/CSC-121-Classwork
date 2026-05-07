"""Settings for the Space Aliens game.

This file keeps the game's adjustable settings in one place. The structure is
based on the Alien Invasion project from Python Crash Course, 3rd Edition.
"""


class Settings:
    """Store all settings for Space Aliens."""

    def __init__(self):
        """Initialize the game's static and changing settings."""
        # Screen settings.
        self.screen_width = 1200
        self.screen_height = 800
        self.bg_color = (10, 12, 28)

        # Ship settings.
        self.ship_limit = 3

        # Bullet settings.
        self.bullet_width = 4
        self.bullet_height = 18
        self.bullet_color = (255, 240, 120)
        self.bullets_allowed = 4

        # Alien settings.
        self.fleet_drop_speed = 14

        # How quickly the game speeds up after each level.
        self.speedup_scale = 1.1

        # How quickly alien point values increase after each level.
        self.score_scale = 1.5

        self.initialize_dynamic_settings()

    def initialize_dynamic_settings(self):
        """Initialize settings that change while the game runs."""
        self.ship_speed = 4.0
        self.bullet_speed = 7.0
        self.alien_speed = 1.4

        # fleet_direction of 1 means right; -1 means left.
        self.fleet_direction = 1

        # Scoring starts at 50 points per alien.
        self.alien_points = 50

    def increase_speed(self):
        """Increase speed settings and alien point values."""
        self.ship_speed *= self.speedup_scale
        self.bullet_speed *= self.speedup_scale
        self.alien_speed *= self.speedup_scale
        self.alien_points = int(self.alien_points * self.score_scale)
