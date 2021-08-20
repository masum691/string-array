function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please provide an array';
    }
    else{
        let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
    }
}
const friends = ['lalu','kalu','salu','dolu mia', 'plu'];
const myBigFriend = megaFriend(friends);
console.log(myBigFriend);

if(friends.indexOf('salu') != -1){
    console.log('salu exists');
}

// includes
if(friends.includes('kalu')){
    console.log('kalu is exists');
}

// concat
const first = [1,2,3,4,6,23];
const second = [3,64,75,232];
const combined = first.concat(second);
console.log(combined);
