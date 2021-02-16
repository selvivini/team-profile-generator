const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'team.html');

const render = require('./lib/renderHtml');
const Employee = require('./lib/Employee');

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
	{ name: 'name', message: "What's the employee's name" },
	{ name: 'id', message: "What's the employee's id" },
	{ name: 'email', message: "What's the employee's email" },
	{
		type: 'list',
		name: 'role',
		message: "What's the employee's role",
		choices: [ 'Manager', 'Engineer', 'Intern' ]
	}
];

const questionForManager = [ { name: 'officeNumber', message: "What's the manager's office number" } ];

const questionForEngineer = [ { name: 'github', message: "What's the Engineer's github" } ];

const questionForIntern = [ { name: 'school', message: "What's the Intern's school" } ];

const confirm = [
	{
		type: 'confirm',
		name: 'adding',
		message: 'Do you want to input more employee information'
	}
];

const init = async () => {
	const employees = [];
	let addMore = true;

	while (addMore) {
		//destructure name, id , email, role from answer object
		const { name, id, email, role } = await inquirer.prompt(questions);

		if (role === 'Manager') {
			const { officeNumber } = await inquirer.prompt(questionForManager);

			// create a new Manager object and push to employees array
			employees.push(new Manager(name, id, email, officeNumber));
		} else if (role === 'Engineer') {
			const { github } = await inquirer.prompt(questionForEngineer);

			// create a new Engineer object and push to employees array
			employees.push(new Engineer(name, id, email, github));
		} else {
			const { school } = await inquirer.prompt(questionForIntern);

			// create a new Engineer object and push to employees array
			employees.push(new Intern(name, id, email, school));
		}

		// check if the user wanna input more employee's information
		const { adding } = await inquirer.prompt(confirm);

		addMore = adding;
	}

	// After the user has input all employees desired, call the `render` function (required
	// above) and pass in an array containing all employee objects; the `render` function will
	// generate and return a block of HTML including templated divs for each employee!
	const html = render(employees);

	// After you have your html, you're now ready to create an HTML file using the HTML
	// returned from the `render` function. Now write it to a file named `team.html` in the
	// `output` folder. You can use the variable `outputPath` above target this location.

	if (!fs.existsSync(outputPath)) {
		const error = await mkdirAsync(DIST_DIR);
		error && console.error(error);
	}

	const error = await writeFileAsync(outputPath, html);
	error && console.error(error);
};

init();
