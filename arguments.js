
// function addNumbers(numOne, numTwo){
//     // console.log(arguments[3]);
//     let result = 0;
//     for(const num of arguments){
//         result = result + num;
//     }
//     return result;
// }
// const sum = addNumbers(22,34, 4, 88);
// console.log(sum);


function addNumbers(numOne, numTwo){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    }
    return sum;
}

const sum = addNumbers(45,34,656,342);
console.log(sum);

function addNumbers(numOne, numTwo){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    }
    return sum;
}

const allNum = addNumbers(3445,34,235,345,2333);
console.log(allNum);

// function getFullName(firstName, lastName){
//     const fullName = firstName + ' ' + lastName;
//     return fullName;
// }
// const name = getFullName('omuk', 'mia', 'Masum', 'Mia', 'urfe');
// console.log(name);


function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'mia', 'Masum', 'Mia', 'urfe', 'nothing', 'hathing', 'batin');
console.log(name);