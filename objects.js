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