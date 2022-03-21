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

In math, prime numbers are whole numbers greater than 1, that have only two factors : 1 and the number itself.
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
A prime number starts at 2 because it is only divisible by 1 or itself. 
Set the list containing 2 to a variable called prime and the next number 3 to the variable nextPrime. 
It iterates until the input value n is less than the length of the list, and the next number nextPrime is sent to the isPrime function to check whether the variable is prime or not. If the prime is correct, the variable nextPrime is added to the list of primes and nextPrime is incremented by 1.

As in the example value, when n=3, the primes returned by the function generatePrimes are [2,3,5].


```sh
function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

The function isPrime checks whether or not it is a prime number. 
Basically, if a natural number from 2 to n-1 is divisible when divided, it is not a prime number.
However, since all natural numbers from 2 to n-1 must be checked, the time complexity increases.

To reduce time complexity, I use the divisor feature.
Because of the properties of divisors, all divisors are symmetric with respect to the multiplication operation with respect to the central factor.

For example, the factors of 16 are 1, 2, 4, 8, 16.
where 2 X 8 = 16 is symmetric with 8 X 2 = 16.
Therefore, when we find all the divisors of a particular natural number, we only need to check the middle divisor (square root).
For example, when 16 is divisible by 2, it means that it is also divisible by 8.

![image](https://user-images.githubusercontent.com/79802132/159277533-b868d461-0de7-4a2b-9f03-2b0012115240.png)

```sh
function printTable(primes) {
  var table = " | | ";
  for (var i = 0; i < primes.length; i++) {
    table += primes[i] + " | ";
  }
  table += "\n";
  for (var j = 0; j < primes.length; j++) {
    table += " | " + primes[j] + " | ";
    for (var k = 0; k < primes.length; k++) {
      table += (primes[j] * primes[k]) + " | ";
    }
    table += "\n";
  }
  return table;
}
```
It takes the value primes returned by the function generatePrimes() and creates the table in the function printTable().
The application should print the numbers in an N+1 x N+1 grid, and the first grid is | |, 
so create a variable called table | | to start first. 
Then, by repeating the length of primes with the for statement, the list numbers of primes and | are added to the table.
When all the numbers in primes are added to the table
| | 2 | 3 | 5 | The first grid is complete. After completion, add a new line to draw the next second grid.


-  What you’re pleased with. 
-  What you would do with it if you had more time. 
