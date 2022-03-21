# Coding exercise -prime tables

## Instructions
- For the programming language, please use JavaScript.
-  You should have a test for a performant prime algorithm that can generate a list of 
primes.
- We recommend small commits to git so that we can see how you’ve developed your 
solution.
-  We recommend writing your application with high unit test coverage.
-  For the input and output you can use the console, a web page, or something else.
- Please write an algorithm to solve the prime number generation. Do not use a library 
method to generate your primes.
-  You should input a whole number N, where is N is at least 1.
-  The application should output an N+1 x N+1 grid of numbers.


## Explanation
-  How to run it. 

![Untitled-2022-03-18-1510](https://user-images.githubusercontent.com/79802132/159034960-234acb7a-9e62-4f19-8181-fbf81326e98b.png)


Numbers 2, 3, and 5 in the first grid are prime numbers.
The numbers written on the rest of the grid are multiples of 2, 3, 5.

> What are Prime Numbers?

In math, prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.
Prime numbers are divisible only by the number 1 or itself. 
For example, 2, 3, 5, 7 and 11 are the first few prime numbers.

> What is a Multiple?

A multiple in math are the numbers you get when you multiply a certain number by an integer.

For example, 
multiples of 2 are: 4, 6, 8, 10..etc.
multiples of 3 are: 6, 9, 12, 15.. etc. 
multiples of 5 are: 10, 15, 20, 25..etc.


First, create functions that generate the first grid numbers 2, 3, 5 primes and check whether they are prime or not.

```sh
function generatePrimes(n) {  
  var primes = [2];
  var nextPrime = 3;
  while (primes.length < n) {
    if (isPrime(nextPrime)) {
      primes.push(nextPrime);
    }
    nextPrime++;
  }
  return primes;
}
```
-  What you’re pleased with. 
-  What you would do with it if you had more time. 
