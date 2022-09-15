'use strict';

var sum_to_n_a = function (n) {
  // your code here
  let ans = 0;

  // add in series 
  // time complexiety: o(n)
  for (let num = 1; num <= n; num++)
    ans += num

  return ans
};

var sum_to_n_b = function (n) {
  // your code here
  let ans = 0;

  // sum =  sum of 2 outermost elements
  const sum = 1 + n;

  // answer = sum of pairs till center
  // if n is odd, need to add middle value separately 
  // time complexiety: o(1)
  ans = Math.floor(n / 2) * (n + 1);
  if (n % 2)
    ans += sum / 2

  return ans
};

var sum_to_n_c = function (n) {
  // your code here
  // arithmetic sequence formula for sum of n terms
  // time complexiety: o(1)
  return n * (n + 1) / 2
};

console.log(sum_to_n_a(10))
console.log(sum_to_n_b(10))
console.log(sum_to_n_c(10))
