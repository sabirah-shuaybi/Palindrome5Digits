/* Palindrome5Digits is a program that contains 3 different ways to compute the sum of all possible 5 digit palindromes
 * Author: Sabirah Shuaybi
 * Date: 11/22/16
 */

/* Reverses a string */
function reverse(s) {
  return s.split('').reverse().join('');
}

/* Brute force method:
 * Searches from 10000 to 99999 for palindromes and aggregates them.
 */
function palinBruteForceSearch() {
  var sum = 0;
  for (var i = 1; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        for (var l = 0; l < 10; l++) {
          for (var m = 0; m < 10; m++) {
            var stringNum = "" + i + j + k + l + m;
            if (stringNum == reverse(stringNum)) {
              sum += Number(stringNum);
            }
          }
        }
      }
    }
  }
  return sum;
}

/* Optimized search method:
 * Since for a 5 digit palindromis number, the first and last digit will be the same
 * and the second and second last digit will be the same, it is not necessary to
 * search the entire range of numbers.
*/
function palinOptimized() {
  var sum = 0;
  for (var i = 1; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        var stringNum = '' + i + j + k + j + i;
        sum += Number(stringNum);
      }
    }
  }
  return sum;
}

/* Construct palindrome method:
 * Instead of searching for palindromes, this method constructs the set of all
 * possible 5 digit palindromes and aggregates them. It does so by creating the list
 * of all possible first 2 digits. The last 2 digits will be the reverse of the first
 * 2 digits. The inner loop then loops through all possible middle digits and
 * constructs the palindrome.
 */
function palinConstruct() {
  var sum = 0;
  for (var i = 10; i < 100; i++) {
    var first2digits = i.toString();
    var last2digits = reverse(first2digits);
    for (var middleDigit = 0; middleDigit < 10; middleDigit++) {
      var palinStr = first2digits + middleDigit + last2digits;
      sum += Number(palinStr);
    }

  }
  return sum;
}


//Print results of each technique on console
console.log('Sum using brute force search = ' + palinBruteForceSearch());
console.log('Sum using optimized search = ' + palinOptimized());
console.log('Sum using palindromw construct = ' + palinConstruct());
