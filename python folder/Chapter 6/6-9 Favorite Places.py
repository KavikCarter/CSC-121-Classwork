# Dictionary of favorite places
favorite_places = {
    'Aaron': ['Las Vegas'],
    'Kota': ['Outer Banks'],
    'Colby': ['Monza'],
    'Zach': ['Amsterdam']
}

# Loop through the dictionary and print each person's name and favorite places
for name, places in favorite_places.items():
    print(f"{name}'s favorite place(s):")
    for place in places:
        print(f"  - {place}")
    print()