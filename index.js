const firstNumber = process.argv[2];
const secondNumber = process.argv[3];

const sum = (a, b) => a + b;

console.log(sum(Number(firstNumber), Number(secondNumber)));