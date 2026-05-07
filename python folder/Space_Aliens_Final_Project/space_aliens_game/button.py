"""A clickable button used on the Space Aliens title screen."""

import pygame.font


class Button:
    """Create a rectangular button with centered text."""

    def __init__(self, ai_game, msg):
        """Initialize button attributes."""
        self.screen = ai_game.screen
        self.screen_rect = self.screen.get_rect()

        # Button dimensions and colors.
        self.width, self.height = 220, 60
        self.button_color = (30, 125, 210)
        self.text_color = (255, 255, 255)
        self.font = pygame.font.SysFont(None, 48)

        # Build the button's rect object and center it.
        self.rect = pygame.Rect(0, 0, self.width, self.height)
        self.rect.center = self.screen_rect.center

        # Prepare the button message only once.
        self._prep_msg(msg)

    def _prep_msg(self, msg):
        """Turn msg into a rendered image and center it on the button."""
        self.msg_image = self.font.render(msg, True, self.text_color, self.button_color)
        self.msg_image_rect = self.msg_image.get_rect()
        self.msg_image_rect.center = self.rect.center

    def draw_button(self):
        """Draw the button and its message."""
        pygame.draw.rect(self.screen, self.button_color, self.rect, border_radius=12)
        self.screen.blit(self.msg_image, self.msg_image_rect)
