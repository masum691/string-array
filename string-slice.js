

const loveAllah = 'I love Allah and His Prophet Hazrat Muhammad Sm';
// split
// const words = loveAllah.split(' ');
const withoutS = loveAllah.toLowerCase().split('s');
console.log(withoutS);

// slice
const smallSlice = loveAllah.slice(7, 12);
console.log(smallSlice);

// substr
const anotherPart = loveAllah.substr(7, 12);
console.log(anotherPart);


// substring 
const anotherPartString = loveAllah.substring(7, 13);
console.log(anotherPartString);

// concat 
const first = 'I love';
const second = ' Allah';
const add = first.concat(second).concat(' And his Prophet');
console.log(add);

const words = ['a', 'b', 'c', 'd', 'e'];
const allJoined = words.join('');
console.log(allJoined);

const myFriends = ['rohim', 'karim', 'samir', 'jamir'];
// const friendsJoin = myFriends.join(' vs ');
// const friendsJoin = myFriends.join(' ');
const friendsJoin = myFriends.join(' , ');
console.log(friendsJoin);