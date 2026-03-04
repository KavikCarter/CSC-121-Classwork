# Dictionary of major rivers and the countries 
rivers = {
    'nile': 'egypt',
    'amazon': 'brazil',
    'yangtze': 'china'
}

# Print a sentence about each river
for river, country in rivers.items():
    print(f"The {river.title()} runs through {country.title()}.")

print()

# Print the name of each river
for river in rivers.keys():
    print(river.title())

print()

# Print the name of each country
for country in rivers.values():
    print(country.title())