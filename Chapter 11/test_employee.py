from employee import Employee


def test_give_default_raise():
    """Test that the default raise adds $5,000 to the salary."""
    employee = Employee('Kavik', 'Carter', 50000)
    employee.give_raise()

    assert employee.annual_salary == 55000


def test_give_custom_raise():
    """Test that a custom raise amount is added to the salary."""
    employee = Employee('Kavik', 'Carter', 50000)
    employee.give_raise(10000)

    assert employee.annual_salary == 60000