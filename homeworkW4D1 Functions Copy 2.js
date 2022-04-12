// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.//
function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
      return num1;
    } else {
       return num2;
    }
}

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.//

function maxOfThree(num1, num2, num3){

if(num1 >= num2 && num1 >= num3) {
    return num1;
}
else if (num2 >= num1 && num2 >= num3) {
    return num2;
}
else {
    return num3;

}
}

//Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.//
function isCharacterAVowel(char){
    if (char == 'a' || char == 'e' || char == 'i'|| char == 'o' || char == 'u'){
        return true;
    } else {
        return false;
    }
}

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.//
function sumArray(array) {
    var length = array.length;
    var total = 0;
    for (i = 0; i < length; i++) {
      total += array[i];
    }
    return total;
  }
  
 function multiplyArray(array) {
    var length = array.length;
    var total = 1;
    for (i = 0; i < length;  i++) {
      total *= array[i];
    }
    return total;
  }

//Write a function that return the number of arguments passed to the function when called.//
function func() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += 1;
    }
    return sum;
  } 

  //Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".//
  function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.//
var findLongestWord = function(array) {
    var elements = array.length;
    var count = 0;
    for (i = 0; i < elements; i++) {
      if (array[i].length > count) 
        count = array[i].length;
    }
    return count;
  }


  //Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.//
  
  var filterLongWords = function(arr, minLength){
    const words = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i].length > minLength) {
        words.push(arr[i]);
      }
    }
    return words;
 }

  
//BONUS//
  //Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
  function reverseString(str) {
    var reversedWord = '';
    for (var i = str.length - 1; i >= 0; i--)
      reversedWord += str[i];
    return reversedWord;
  }
/*
//Write a function that takes a string as argument and returns an object where: the keys are the characters that occur in the string
the values are the number of occurrences for each letter, regardless of the case
For example, calling the function with the string "Per Scholas" will return:

{
  a: 1,
  c: 1,
  e: 1,
  h: 1,
  l: 1,
  o: 1,
  p: 1,
  r: 1,
  s: 2,
}//
*/
function stringInstances(str) {
    var chars = [];
    for (let i = 0; i < str.length; i++) {
        if (chars[str.charAt(i)]) {
           chars[str.charAt(i)]++;
        } else {
           chars[str.charAt(i)] = 1;
        }
    }
    return chars;
}




  