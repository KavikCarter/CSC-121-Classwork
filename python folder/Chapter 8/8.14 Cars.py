def make_car(manufacturer, model, **kwargs):
    car_info = {
        'manufacturer': manufacturer,
        'model': model
    }

    for key, value in kwargs.items():
        car_info[key] = value

    return car_info


car = make_car('chevy', 'corvette', color='red', convertible=True)
print(car)