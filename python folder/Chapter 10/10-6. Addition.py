try:
    # Ask the user to enter the first number
    num1 = int(input("Enter the first number: "))

    # Ask the user to enter the second number
    num2 = int(input("Enter the second number: "))

    # Add the two numbers together
    total = num1 + num2

    # Print the result
    print(f"The sum is {total}.")

except ValueError:
    # This runs if the user enters text instead of a number
    print("Sorry, that was not a valid number. Please enter whole numbers only.")