import random

items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B', 'C', 'D', 'E']

numbers = items[:10]
letters = items[10:]

selected_numbers = random.sample(numbers, 4)
selected_letter = random.choice(letters)

lottery_number = selected_numbers + [selected_letter]

print("Enter your lottery guess as 4 numbers and 1 letter.")
print("Example: 3 7 1 9 A")

user_input = input("Your guess: ").split()

if len(user_input) == 5:
    try:
        user_guess = [
            int(user_input[0]),
            int(user_input[1]),
            int(user_input[2]),
            int(user_input[3]),
            user_input[4].upper()
        ]

        print(f"Winning lottery number: {lottery_number}")

        if user_guess == lottery_number:
            print("Congratulations! You are a winner!")
        else:
            print("Sorry, you did not win.")

    except ValueError:
        print("Invalid input. Please enter 4 numbers followed by 1 letter.")
else:
    print("Invalid input. Please enter exactly 4 numbers and 1 letter.")