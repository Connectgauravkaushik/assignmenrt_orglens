/*
  Question : 1. write a function that takes a string and returns that string in lowercase and uppercase with - as delimiter.
*/

const res = require("express/lib/response");

function toCase(name) {
    let strOutput = `${name.toLowerCase()}-${name.toUpperCase()}`;
    return strOutput;
}

const result  = toCase('Mthatha');
console.log(result);


/*
  Question :  2. write a function firstChar, which returns the first character that is not a space when a string is passed.
*/ 

function firstChar(str){
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return str[i];
        }
    }
    return null; 
        
}
const getFirstChar = firstChar(' Rosa Parks ');
console.log(getFirstChar);

/*
   Question : 3. Write a function rotate that rotates the elements in an array . All Elements should be moved one position
   to the left. The 0th element should be placed at the end of the array. The Rotated array should be returned.
*/ 

function rotate(arr){
    
    // // No rotation needed for arrays with 0 or 1 element
    if (arr.length <= 1) {
        return arr; 
    }
    //storing the first element
    const firstElement = arr.shift(); 

    //push the element
    arr.push(firstElement); 

    return arr;
}

let arr = ['a' , 'b' ,'c'];
const rotatedArray = rotate(arr);
console.log(rotatedArray);