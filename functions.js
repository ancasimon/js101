console.log("functions");

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;
    // const output = 'processed ' + animal;
    // console.log('animal', animal);
    return output;
}
console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));