# Palindrome5Digits

 **Palindrome5Digits presents three distinct algorithms that ultimately compute the sum of all 5-digit palindromes.**
  
  (__Palindrome__: a sequence of letters, characters or numbers that reads the same backwards as forwards)

  Each subsequent algorithm is more efficient at calulating this sum than the previous.

  1) The first funtion/algorithm **palinBruteForceSearch()** is the least efficient and most complex
     Using 5 nested loops, this function creates all possible 5 digit numbers. 
     Then, it searches for all the palindromes within the set off all 5 digit numbers and aggregates them. 
  
  2) The second funtion/algorithm **palinOptimized()** is more efficient than the first algorithm (uses only 3
     nested loops instead of 5). This technique is based on the recognition that in a palindromic 5 digit number, the first
     digit will be equal to the last digit and the second digit will be equal to the second last digit. Thus, it is
     unnecessary to search through the entire range of 5 digit numbers. 
  
  3) The last function/algorithm **palinConstruct()** is the most efficient out of the three because instead of searching 
     for all the 5 digit palindromes in order to ultimately aggreate them, this algorithm actually constructs the set of all
     possible 5 digit palindromes and aggregates them. It does so by creating the list of all possible first 2 digits. The
     last 2 digits will be the reverse of the first 2 digits. The inner loop then loops through all possible middle digits and
     constructs the palindrome. Lastly, it sums all of the palindrome values. 

(*Note: Algorithm # 3 is very similar to Algorithm # 2 since both require a construction of the palindromes rather than a massive/brute search for them. Nonetheless, Algorithm # 3 is a more refined technique.*)
