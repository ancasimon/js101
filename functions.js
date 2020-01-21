console.log("functions");

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;
    // const output = 'processed ' + animal;
    // console.log('animal', animal);
    return output;
}
console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));

const dogBreed = (dog) => {
    const output = `My favorite dog breed is ${dog}.`;
    return output;
};

console.log(dogBreed('lab'));
console.log(dogBreed('actually a cat'));
