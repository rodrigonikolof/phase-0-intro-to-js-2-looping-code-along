// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


// const people = ["Guadalupe", "Ollie", "Aki"];
const messages = [];
function writeCards(name, surprise){
for (let i=0; i < name.length; i++){
    messages.push (`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
    }
    return messages;
}




function countDown (c){
while (c >= 0) {
    console.log(c);
    c--;
 }
} 

countDown(10);