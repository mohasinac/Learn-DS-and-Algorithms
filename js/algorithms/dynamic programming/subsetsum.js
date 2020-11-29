
/*
    Given an array and a number say X
    whether there are elements in the array whose sum is X , true or false
*/
/*
    Generate all subsets and find out their sum, and if there exists a sum which is X
    O(2^n) exponential in n

*/
/*
    Recursion :
    S(n,sum) = {
        FALSE if n ==0 && sum > 0 //base case
        True if  sum == 0  //base case
        //not using n 
        S(n-1,sum) 
        or 
        //or using n
        S(n-1,sum - set[n])
    }
*/

/*
    Dynamic Programming Algorithm
    It has a overlapping sub problems, but there maybe a case of no overlapping sub problem then DP === Recursion
    It has a single optimal solution i.e. True or False
    O(n*sum) i.e. worst case is O(2^n) still when sum = 2^n
    such algorithms are called pseudo - polynomial algorithms 

    for(i=0 to n)
        for s = 0 to sum
            S(i,s) = recursive formula
                save matrix-table[n+1,sum+1]
*/