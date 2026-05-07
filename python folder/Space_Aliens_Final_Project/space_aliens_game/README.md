# Space Aliens Final Project

This is a Python/Pygame arcade game based on the Alien Invasion project structure from *Python Crash Course, 3rd Edition*, chapters 12 through 14.

## How to Run

1. Open this folder in Visual Studio Code.
2. Open the Terminal in VS Code.
3. Install Pygame if it is not already installed:

   ```bash
   python3 -m pip install pygame
   ```

   If your computer uses `python` instead of `python3`, use:

   ```bash
   python -m pip install pygame
   ```

4. Run the main file:

   ```bash
   python3 alien_invasion.py
   ```

   Or:

   ```bash
   python alien_invasion.py
   ```

## Controls

- Click **Play** or press **P** to start.
- Use the **Left Arrow** and **Right Arrow** keys to move the ship.
- Press **Space** to shoot.
- Press **Q** to quit.

## Project Files

- `alien_invasion.py` - main game file and game loop
- `settings.py` - game settings and difficulty speed increases
- `game_stats.py` - score, level, ships left, and game status
- `scoreboard.py` - displays score, high score, level, and ships left
- `button.py` - creates the Play button
- `ship.py` - creates and moves the player ship
- `bullet.py` - creates and moves bullets
- `alien.py` - creates and moves aliens

## Resources Used

- Matthes, Eric. *Python Crash Course, 3rd Edition*. No Starch Press. Chapters 12-14, Alien Invasion project.
- Pygame documentation and package tools.
- Python documentation for modules, classes, and basic file organization.
