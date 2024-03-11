class Customer {
    private firstName: string;
    private lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public greeter = () => {
        console.log('Hello ${this.firstName} ${this.lastName}');
    }
}
// object = instance of the class
let customer = new Customer("John", "Smith");
customer.greeter();