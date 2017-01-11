/* Object and function Arrow Syntax */

class Team {
	
	constructor(names = []) {
		this.names = names;
	}
	
	greet() {
		this.names.forEach((name) => name.greet());		
	}
}

class Member {
	
	constructor(name) {
		this.name = name;
	}
	
	greet() {
		console.log(this.name);
	}
	
}

team = new Team(
	[new Member('Sulley'), new Member('Mike'), new Member('Boo')]
);

team.greet();

/* Default parameters */

function applyDiscount1(cost, discount) {
	
	discount = discount || .10;
	return cost - (cost * discount);
}

function applyDiscount2(cost, discount = .10) {
	
	return cost - (cost * discount);
}

function calculateDiscount() {
	return .20;
}

function applyDiscount(cost, discount = calculateDiscount()) {
	
	return cost - (cost * discount);
}

console.log(applyDiscount(100, .30));
console.log(applyDiscount(100));

/* Variable number of arguments - REST and SPREAD operator */

function sum1(...numbers) {
	
	return numbers.reduce(function(prev, current){
		
		return prev + current;
		
	});
}

function sum(...numbers) {
	return numbers.reduce(
		(prev, current) => prev + current
	);		
}

console.log(sum(1,2,3,4,5));

function add(a, b, c) {	
	return a + b + c;
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [7, 8];

console.log(add(...arr1)); // returns NaN

// old JS style html string
let html = [
	'<div class="alert">',
		'<p>Foo</p>',
	'</div>'
].join('');

console.log(html);

// ES6
let name = 'Foo';

let template = `
	<div class="alert">
		<p>${name}/p>
	</div>
`.trim();

console.log(template);