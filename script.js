// console.log('hello script');
// Brendan Eich

// single line comment

/*
this is a multiline comment
*/

// Variables - named storage
// declaring a variable

// let cat, mouse;
// let cat;
// let mouse;

let client;
// assignment
client = 'chrome' + ' 🙂';
// console.log(client);
let name = 'Anna';
// console.log(name);
name = 'Thomas';
// console.log(name);
// console.assert(3 === 4, 'it is not equal');

// const cannot be reassigned 
// whenever possible use const - don't use var
const cat = 'jerry';
// cat = 'tom';
// console.log(cat)


// Data types 
// There are two types of data types - objects and primitive data types

// 6 primitive types: number, string, boolean, null, undefined, symbol

// String
// let userName = 'Jim';
// console.log(typeof userName);
// userName = 23;
// console.log(typeof userName);
let greeting = 'HelloWorld';
// userName = "Alice";
// userName = `Alice`;
// concatenate strings
// const message = greeting + ' ' + userName;
// console.log(message)
const anotherMessage = `${greeting} Alice`;
// console.log(anotherMessage)

// String methods and properties
// get the length of a string
// console.log(greeting.length)

// using brackets to access a certain character in a string
// const firstChar = greeting[0];
const firstChar = greeting.charAt(0);
const lastChar = greeting[greeting.length - 1]
// console.log(firstChar);
// console.log(lastChar);

// const greeting = 'HelloWorld';
// indexOf to get the first index of a certain character
// console.log(greeting.indexOf('o')) // 1
// returns - 1 if that char is not contained in the string
// console.log(greeting.indexOf('x')) // - 1
// lastIndexOf -> get's you the last index
// console.log(greeting.lastIndexOf('o')) // 1

// slice returns a substring from a string with a given range specified as parameters
const sliced = greeting.slice(0, 3) // -> 0 to 3 exclusive 
// nice trick
// console.log(greeting.slice(- 1))

// toUpperCase() => turns char or word to uppercase
// console.log(greeting.toUpperCase());
// strings are immutable you cannot change them, you have to reassign
// another value
greeting = greeting.toUpperCase()
// console.log(greeting)

// let userName = 'alice';
// const upperCased = userName[0].toUpperCase() + userName.slice(1)
// console.log(userName.toUpperCase());
// console.log(upperCased)

// numbers
const distance = 70000;
const price = 19.99;

// this results in NaN - not a number
// console.log('hello' * 3);

// math operators
// 5 + 3
// 6 - 3
// 6 / 3 -> 6 divided by 3
// 4 * 5
// 4 ** 2 -> 4 to the power of 2

// modulo 
// console.log(4 % 2) // --> 0 
// console.log(5 % 2) // --> 1 

// let counter = 0;
// counter = counter + 1;
// counter += 1;
// counter++;
// ++counter
// console.log(counter)

// booleans / undefined and null
// boolean expression evaluates either to true or false

// console.log(5 <= 5)
// the equality operator
let userName = 'Bob';
// === (also check the type) - ==
// console.log(userName === 'Bob')
// console.log('4' == 4);
// console.log(true == 1)

// Logical operators
// || -> logical or
// && -> logical and
// console.log(5 > 3 && 3 < 2);

// falsy values : '', 0, null, undefined, NaN 
// undefined represents the unintentional absence of value
// null represents the intentional absence of value

// const password = '';
// if (!password) {
// console.log('this is true')
// } else {
// console.log('this is not true')
// }

const check = '' || 'root'; // a statement using || evaluates to the first 
// console.log(check)
// truthy value or the last falsy
const anotherCheck = 23 && 'hello';// the && will evaluate to the first falsy or the last
// truthy

// console.log(anotherCheck)
// ! negation
// !false -> true

// check for not equal
// console.log(5 !== '5')


// conditionals and loops


// we want to turn the string which is returned from prompt to a number

// const age = Number(prompt('how old are you?'));
// console.log(typeof age);
// if (age >= 18) {
//     alert('you can drive in germany');
// } else if (age === 17) {
//     alert('you can drive with an older person');
// } else {
//     alert('you are too young to drive 🙃');
// }

// switch case
// const language = prompt('what is your mother tongue?');
// switch (language) {
//     case 'french':
//         console.log('bonjour');
//         break;
//     case 'english':
//         console.log('hello')
//         break;
//     default:
//         console.log('non recognized language');
// }

// iterations - loops

// for loop
// (where to start; under which condition do we continue; what to do after the iteration) 

// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }
// console.log('done');

// exactly the same logic with a while loop
// let counter = 0;
// while (counter < 11) {
//     console.log(counter);
//     counter++;
// }

// use case for while
let password = prompt('enter password');
while (password !== '123456') {
    password = prompt('pls enter password');
}
alert('password is correct 👍')

let password;
do {
    password = prompt('enter password');
}
while (password !== '123456');
alert('password is correct')