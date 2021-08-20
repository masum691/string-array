const products = [
    'Acer Laptop with 1TB HDD and 4GB Ram',
    'iPhone X 64 MPX camera White color',
    'Black color watch 200tk',
    'Samsung j2 is my phone gold color',
    'Mac laptop with 8GB ram nice Camera',
    'Golden color mobile realMe',
    'Gaming pc with 8GB graphics card',
    'realme low price Phone'
];


// const searching = 'phone';
// const output = [];
// for(const product of products){
//     if(product.toLowerCase().indexOf(searching) != -1){
//         output.push(product);
//     }
// }
// console.log(output);

// const searching = 'camera';
// const result = [];
// for(product of products){
//     if(product.toLowerCase().indexOf(searching) != -1){
//         result.push(product);
//     }
// }
// console.log(result);

const searching = 'laptop';
// indexOf 
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);

// indexOf and includes are almost same
// includes
const productsTwo = [
    'Acer Laptop with 1TB HDD and 4GB Ram',
    'iPhone X 64 MPX camera White color',
    'Black color watch 200tk',
    'Samsung j2 is my phone gold color',
    'Mac laptop with 8GB ram nice Camera',
    'Golden color mobile realmE',
    'Gaming pc with 8GB graphics card',
    'Realme low price Phone'
];
const searchResult = 'camera';
const outputIs = [];
for(const product of productsTwo){
    if(product.toLowerCase().includes(searchResult.toLowerCase())){
        outputIs.push(product);
    }
}
console.log(outputIs);

// start with
// const search = 'REALME';
// const answer = [];
// for(const product of products){
//     if(product.toLowerCase().startsWith(search.toLowerCase())){
//         answer.push(product);
//     }
// }
// console.log(answer);

// ends with
const search = 'realme';
const answer = [];
for(const product of products){
    if(product.toLowerCase().endsWith(search.toLowerCase())){
        answer.push(product);
    }
}
console.log(answer);