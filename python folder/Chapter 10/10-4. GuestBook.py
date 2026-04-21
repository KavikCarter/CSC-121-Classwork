# Ask for guest names and record each visit
while True:
    name = input("Enter your name: ")

    if name == "":
        break

    print(f"Hello, {name}!")

    with open("guest_book.txt", "a") as file:
        file.write(name + "\n")