# Exercise 7-5: Movie Tickets

total_cost = 0
ticket_count = 0

num_tickets = int(input("How many tickets would you like to purchase? "))

while ticket_count < num_tickets:
    age = int(input(f"Enter the age of ticket holder {ticket_count + 1}: "))

    if age < 3:
        price = 0
        print(f"  Ticket holder {ticket_count + 1} (age {age}): FREE")
    elif age <= 12:
        price = 10
        print(f"  Ticket holder {ticket_count + 1} (age {age}): $10.00")
    else:
        price = 15
        print(f"  Ticket holder {ticket_count + 1} (age {age}): $15.00")

    total_cost += price
    ticket_count += 1

print(f"\nTotal cost for {num_tickets} ticket(s): ${total_cost:.2f}")