const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
	var school = this.school
	if (this.school ==="") {school="Value Not Provided"}
        return school;
    }
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;