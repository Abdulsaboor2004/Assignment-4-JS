// QUESTION 1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.



let arrofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumallevennumbers(arrofnumbers) {
    let sum = 0;
    for (let index = 0; index < arrofnumbers.length; index++) {
        if (arrofnumbers[index] % 2 === 0) {
            sum += arrofnumbers[index];
        }
    }

    return sum;
}

console.log(sumallevennumbers(arrofnumbers))



//Learned that sum += arrofnumbers[index] can also be written as sum = sum + arrofnumbers[index]
// DONE...





// QUESTION 2. Write a function that takes a string as input and returns the number of vowels in the string.


const word = "Thanks";

function howmanyvowels(word) {

    let vowels = 'aeiouAEIOU';
    let counted = 0;
    for (let i = 0; i < word.length; i++) {

        if (vowels.includes(word[i])) {

            counted++;
        }

    }
    return counted;
}

let countedvowels = howmanyvowels(word);

console.log(countedvowels);



//Learned that we can compare the characters of 2 Strings using string_one.includes(string_2[i])
// DONE...



// QUESTION 3. Write a function that takes an array of strings as input and returns the length of the longest string in the array.


const arrofstr = ['Pet', 'Chair', 'Blue']

function find_long_string(arrofstr) {

    let largest_str = 0;
    for (i = 0; i < arrofstr.length; i++) {

        if (arrofstr[i].length > largest_str) {
            largest_str = arrofstr[i].length;
        }

    }
    return largest_str;
}

let largest_str_answer = find_long_string(arrofstr);

console.log(largest_str_answer);

// Learned to find longest string from array. Just use 
//if (arrofstr[i].length > largest_str;) {
// largest_str; = arrofstr[i].length;

// DONE....






// QUESTION  4. Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

let arrofnum = [1, 2, 3]
  
function mean(arrofnum){
    sum = 0;
    for (let i = 0; i < arrofnum.length; i++) {
        sum += arrofnum[i];
    }

    return sum / arrofnum.length;
}

console.log(mean(arrofnum));

// just like mean we so in Statistics "sum all" and /  with ".length"

//DONE...



 // QUESTION 5. Write a function that takes an object as input and returns an array of all the keys in the object.

const ass_4_Obj = {
    Roll: 1,
    Name: 'Sonu',
    Class: 'Matric'
  };
  
  function turnObjintoArr(obj) {
    return Object.keys(obj);
  }
  
  const ass4answer = turnObjintoArr(ass_4_Obj);
  console.log(ass4answer);



// DONE... USE PREDEFINED  function turnObjintoArr(obj) {
// return Object.keys(obj);}



// SIR, I currently don't understand the remaining three functions, but I will learn them thoroughly and add them to my Git repository. 

  // QUESTION 6. Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.






// QUESTION 7. Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.






// QUESTION 8. Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.