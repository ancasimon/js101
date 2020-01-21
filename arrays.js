console.log("Arrays!!");

const junkDrawer = ['hi',2,true,{name: 'Zoe Ames'}, [1,2,3,4]];

//to get true from the array above:
console.log(junkDrawer[2]); 

//to add "fluffy" to the end of the array:
junkDrawer.push('fluffy');


//write the function so that the item with the 2nd or 3rd position - as specified in the console.log statement below - from the array gets displayed.  
const valuePrinter = (list, position) => {
    return list[position];
};

console.log(valuePrinter([1,2,3,4,5], 2));
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3));

//could have also done:
//const numArray = [1, 2, 3, 4, 5];
//console.log(valuePrinter(numArray,2)); 


