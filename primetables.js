// Instructions
// For the programming language, please use JavaScript.
// You should have a test for a performant prime algorithm that can generate a list of primes.
// We recommend small commits to git so that we can see how you've developed your solution.
// We recommend writing your application with high unit test coverage.
// For the input and output you can use the console, a web page, or something else.
// Please write an algorithm to slove the prime numver generation. Do not use a library method to generate your primes.
// You should input a whole number N, where is N is at least 1.
// The application should output an N+1 x N+1 grid of numbers.

// Expected primes multiplication table when N is 3
// | | 2 | 3 | 5 |
// | 2 | 4 | 6 | 10 |
// | 3 | 6 | 9 | 15 |
// | 5 | 10 | 15 | 25 | 

// Please include a README file that outlines:
// How to run it
// What you're pleased with
// What you would do with it if you had more time.

// We will evaluate your submission on:
// A solution that comprises a prime algorithm that can generate primes efficiently;
// think in terms of generating and displaying a primes multiplication table where N is at least 10.
// If you have time, we would look favourably on a larger N, but keep in mind we evaluate on more than just
// a large N (see other bullet points), so we may prefer a solution where N=10 over a solution submitted for N=100.
// Code that is easy to read and understand by others unfamiliar with it and that clearly communicates what the algorithm is doing.
// A simple and extensible solution, e.g. could you plug-in another algorithm easily?
// Code that is eeasily maintainable.
// The formatting of the output.


// Please include a README file that outlines:
// How to run it
// What yor're pleased with
// What you would do with it if you had more time.

// Expected output
// | | 2 | 3 | 5 |
// | 2 | 4 | 6 | 10 |
// | 3 | 6 | 9 | 15 |
// | 5 | 10 | 15 | 25 |


// Solution
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

function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}



function printTable(primes) {
  var table = "| | ";
  for (var i = 0; i < primes.length; i++) {
    table += primes[i] + " | ";
  }
  table += "\n";
  for (var j = 0; j < primes.length; j++) {
    table += primes[j] + " | ";
    for (var k = 0; k < primes.length; k++) {
      table += (primes[j] * primes[k]) + " | ";
    }
    table += "\n";
  }
  return table;
}

// Test
var primes = generatePrimes(3);
console.log(printTable(primes));







