class Employee {
    constructor(name, id, email) {
        this.name = name;
	this.id = id;
        this.email = email;
    };
    getName() {
	var name = this.name
	if (this.name ==="") {name="Value Not Provided"}
        return name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
	var email = this.email
	if (this.email ==="") {email="Value Not Provided"}
        return email;
    };
    getRole() {
        return "Employee";
    };
};

module.exports = Employee;