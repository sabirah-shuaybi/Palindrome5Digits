# Palindrome5Digits

  Palindrome5Digits presents three distinct algorithms that ultimately compute the sum of all 5-digit palindromes.
  
  (Palindrome: a sequence of letters, characters or numbers that reads the same backwards as forwards)

  Each subsequent algorithm is more efficient at calulating this sum than the previous.

  1) The first funtion/algorithm palinBruteForceSearch() is the least efficient and most complex
     Using 5 nested loops, this function creates all possible 5 digit numbers. 
     Then, it searches for all the palindromes within the set off all 5 digit numbers and aggregates them. 
  
  2) The second  funtion/algorithm OptimizedSearch() is more efficient than the first algorithm 
     because it is based on the recognition that in a palindromic 5 digit number, the first digit will be equal 
     to the last digit and the second digit will be equal to the second last digit. 
