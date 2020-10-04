/**
 * Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.
 */

function printNum() {
    let i = 0
    for ( ; i < 10; ) {
        console.log(i);
        i++;
    }
}

printNum()

/**
 * Using a while loop, return an array that contains all odd numbers between 3 and 103
 */

 function oddArr () {
    let i = 3
    let result = [];
    while(i < 104){
        result.push(i)
        i += 2; 
    }
    return result;
 }

 console.log(oddArr())

/**
 *  arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 18, use any loop. 
 */

 function arraySum(nums) {
    let sum = 0;
    for (let num of nums){
        sum += num;
    }
    return sum;
}

console.log(arraySum([1,2,3,4]))

/**
 * Use a loop to display the numbers 9 to 0 in descending order.
 */
function descendingOrder() {
    for (let i = 9; i >= 0 ; i--) {
       console.log(i);
   }
}

descendingOrder();

/**
 * Write a function computing the factorial of n
 */

function factorial (n){
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(2))

/**
 * Write a function using a for loop that returns the sum of all numbers from 1 to n. 
 */

function sumOfNums (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNums(4));


/**
 * Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’
 * Assume there are no spaces.
 * Let string = “donuts”
 * Expected output => dZnZtZ
 */

function changeSecondLetter (str, char) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if( i % 2 === 1) {
            result += char;
        } else {
            result += str[i]
        }
    }

    return result;
}

console.log(changeSecondLetter('donuts', 'Z'))