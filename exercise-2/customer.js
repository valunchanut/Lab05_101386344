var Customer = /** @class */ (function () {
    function Customer() {
        this.greeter = function () {
            console.log("Hello ${this.firstName} ${this.lastName}");
        };
    }
    return Customer;
}());
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();
