// var  output = [];
// var i = 1;


// function fizzBuzz(){
    
    
//     let three = (i % 3);
//     let five = (i % 5);

    
    
    
//     if (three === 0 && five === 0){
//         output.push("FizzBuzz");
//     }     
//     else if (three === 0){
//         output.push("Fizz");
//     } 
//     else if (five === 0){
//         output.push("Buzz");
//     } 
//     else {
//         output.push(i);
//     }

//     i++;
//     console.log(output);

    
    
// }

// fizzBuzz();

let pangalan = ['Mike','Mary', 'Joseph', 'Noah'];
let indx = pangalan.length - 1; // provides the number of items on the list
let rand = Math.random() * indx; // Generates random number from 0 to the number of items inside the list.
let num = Math.floor(Math.random() * indx); // removes the remainder generated from Math.random

function whosPaying(names) {
    console.log(pangalan[names] + " is going to buy lunch today!");
}

whosPaying(num);
