const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
	var officeNumber = this.officeNumber
	if (this.officeNumber ==="") {officeNumber="Value Not Provided"}
        return officeNumber;
    }
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;