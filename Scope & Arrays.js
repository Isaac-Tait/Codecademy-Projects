// A reinforcement of your understanding of JavaScript scope, arrays, loops, iterators, and objects. 
const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

console.log(reverseArray(sentence)); 

/* Alternate solutions: 

Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
      babyArray.push('baby ' + arr[i]);
    }
    return babyArray
  }
  console.log(convertToBaby(animals)) 
  /*
  // As a function declaration:
  function convertToBaby(arr) {
        const babyArray = [];
        for (let i = 0; i < arr.length; i++) {
              babyArray.push('baby ' + arr[i]);
        }
        return babyArray
  }
  */ 
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');
console.log(shoutGreetings(greetings))

/* Write a function sortYears() that takes in an array of years and, returns that array with the years sorted in descending order.*/ 
const sortYears = arr => arr.sort((x, y) => y - x);
//My work (so close).
//const sortYears = arr => arr.sort(years);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, 
returns an array with the items that are present in both arrays.*/
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

/* Write a function isTheDinnerVegan() that takes in an array of food objects in the format: 
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.*/
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))