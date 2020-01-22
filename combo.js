console.log('COMBO');


// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.
const evenOdd = (integer) => {
    if (integer % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
console.log(evenOdd(5));
console.log(evenOdd(24));

// Challenge #2
// given a number, find its opposite. 2 = -2

const findOpp = (num) => {
    return -num; //or num*(-1)
};

console.log(findOpp(15));


// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

//notes:
//https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
//Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

const isPalindrome = (word) => {
    let remove = /[^A-Za-z0–9]/g;
    let lowCaseRemove = word.toLowerCase().replace(remove, '');
    let reverseWord = lowCaseRemove.split('').reverse().join(''); 
    if (reverseWord === lowCaseRemove) {
        console.log(true);
    } else {
        console.log(false);
    }
};


const palindrome = (text) => {
    const cleanText = text.toLowerCase().replace(' ', '');
    const opp = cleanText.split("").reverse().join(""); //you want the method to split on every simgle chracter > hence the empty quotes; otherwise, you coudl specify that it shoudl look and split the word base don the "co" combination for ex. 
    if (cleanText === opp) {
        return true;
    } else {
        return false;
    } //you coudl also just return the if statement (because they are always returned as true or false) return (cleanText === opp);
};
console.log('palindrome', palindrome('cat'));
console.log('palindrome', palindrome('mom'));
console.log('palindrome', palindrome('Race car'));



isPalindrome('mom');
isPalindrome('beast');




// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.

const animal = (text) => {
    if(text.toLowerCase() === 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }
}; 

console.log(animal('alligator'));
console.log(animal('fish'));
console.log(animal('ALLIgator'));