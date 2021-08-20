const numbers = [4, 3, 4, 4, 7, 8, 4, 3, 5, 1, 4];
const sortNumbers = numbers.sort();
console.log(sortNumbers);


// const friends = ['kalam', 'salam', 'jalam', 'mallam', 'babuilla', 'alam'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

const friends = ['kalam', 'salam', 'jalam', 'mallam', 'babuilla', 'alam'];
// const reverseFriends = friends.reverse();
const reverseFriends = friends.sort().reverse();
console.log(reverseFriends);


// number sorting
const bigNumbers = [5, 57, 23, 754, 345, 678, 345, 88, 76, 63, 42, 243];
const sortedBigNum = bigNumbers.sort(function (a, b){
    return a - b;
})
    console.log(sortedBigNum);


// const num = [34,46,2,45,785,453,245,456,34,24,6434,6563,345];
// const findBigNum = num.sort(function(x,y){
//     return x - y;
// })
// console.log(findBigNum);