

const numbers = [34,54,23,644,76,234,89,56,12,56,37,86];
const numberSliced = numbers.slice(4, 8);
console.log(numberSliced);
console.log(numbers);

const numberSpliced = numbers.splice(4,3);
console.log(numberSpliced);

const numberSpliced2 = numbers.splice(4, 3, 444, 333, 222);
console.log(numberSpliced2);
console.log(numbers);