# Dinner guest list (living or deceased)

guests = ["Nikola Tesla", "Jimi Hendrix", "Steve Jobs"]

# Add a print() call informing people you found a bigger table
print("Good news! I found a bigger dinner table, so I can invite more guests.\n")

# Replace the added guests from the original example with your picks:
# 1) insert() a new guest at the beginning
guests.insert(0, "Stevie Ray Vaughan")

# 2) insert() a new guest in the middle
middle_index = len(guests) // 2
guests.insert(middle_index, "Jim Carrey")

# 3) append() a new guest at the end
guests.append("Albert Einstein")

# sort() the list alphabetically (A–Z)
guests.sort()

# Print a new set of sorted invitation messages
for person in guests:
    print(f"Hello {person}, I’d like to invite you to dinner with me. It would be an honor to have you as a guest!")
