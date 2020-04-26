const Employee = require("./Employee");

class Engineer extends Employee  {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
	var github = this.github
	if (this.github ==="") {github="Value Not Provided"}
        return github;
    }
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;