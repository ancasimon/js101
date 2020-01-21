console.log("objects");

const wordLength = (word) => {
    return word.length;
};

console.log('num of letters', wordLength('cat'));
console.log('num of letters', wordLength('elephant'));

const ageCheck = (age) => {
    if(age<21) {
        console.log("no drinks for you");
    } else {
        console.log("Party!!");
    }
};

// (age >=21) ? console.log("Party") : console.log("no drinks for you");

ageCheck(12);
ageCheck(24);

const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};

//dot notation:
console.log(expense.cost);

//bracket notation:
console.log(expense['cost']);

const employee = {
    id: "abc1234",
    startDate: "01/01/2000",
    firstName: "Jerry",
    lastName: "Jones",
    industry: "healthcare",
    salary: 30000,
    collegeDegree: true,
    position: "line 1, station 2",
    knowledgeable: true,
    onTime: true,
    location: "Nashville",
    supervisor: 'abc5678'
};

console.log(employee.location);

// const employees = [employee];


//Challenge: Create a function called statusMaker that takes in a single employee
//if the employee firstName starts with an M, then add a key of status 
//and a value of VIP;
//if the employee firstName doesn't start with an M, add a key of status 
//and a value of 'peasant';
//return complete employee

console.log(employee.firstName.startsWith('M'));

const statusMaker = (employee) => {
    if (employee.firstName.startsWith('M')) {
    // if (employee.firstName[0]==='M') {
        employee.status='VIP';
    } else {
        employee.status='peasant';
    }
    return employee;
};


console.log(statusMaker(employee));

//another option to get the first letter: if (employee.firstName[0]==='M')
// if (employee.firstName.startsWith('M')) 