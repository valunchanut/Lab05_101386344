var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.greeter = function () {
            console.log('Hello ${this.firstName} ${this.lastName}');
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// object = instance of the class
var customer = new Customer("John", "Smith");
customer.greeter();
