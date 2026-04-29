class Employee:
    """A simple class to represent an employee."""

    def __init__(self, first_name, last_name, annual_salary):
        """Store the employee's first name, last name, and annual salary."""
        self.first_name = first_name
        self.last_name = last_name
        self.annual_salary = annual_salary

    def give_raise(self, raise_amount=5000):
        """Add a raise to the employee's annual salary."""
        self.annual_salary += raise_amount