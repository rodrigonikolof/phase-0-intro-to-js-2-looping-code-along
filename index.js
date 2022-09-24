// const messages = [];
// function writeCards(name, surprise){
// for (let i=0; i < name.length; i++){
//     messages.push (`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
//     }
//     return messages;
// }




// function countDown (c){
// while (c >= 0) {
//     console.log(c);
//     c--;
//  }
// } 

// countDown(10);












function writeCards(array, event){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i);
    }
}