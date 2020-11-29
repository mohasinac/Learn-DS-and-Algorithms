/*
    Longest Common Subsequence (LCS)
        subsequence is different from substring, a subsequence just need to follow ordering and need not 
        be consecutive
    s1 : ABCDGH
    s2: AEDFHR 
        LCS(s1,s2) = ADH is a subsequence of s1
    advantages :
    1. genomics i.e. DNA genetic codes

    algorithm O(2^k) k is max(m,n) recursively
    s1 : 0..m-1
    s2 : 0..n-1
    LCS(m-1,n-1) = LCS(m-2,n-2)+1 , if x[m-1] == y[m-1]
                =  max (LCS(m-1,n-2),LCS(m-2,n-1))
        X , Y
    cases 1:
        X:  AGGTAB
        Y: GXTXAYB
    
    //O(m*n) space complexity O(m*n)
    lcsdp(X,Y,m,n)
    L[m+1][n+1] : 2d array
    for(i=0 to n)
        for(j=0 to n){
            if(i==0||j==0){
                L[i,j] = 0
            }
            ele if(X[i-1]==Y[j-1]){
                    L[i,j] = L[i-1.j-1]+1
                }
            }
            else{
                L[i,j] = max(L[i-1,j],L[i,j-1])
            }
        }
    return L[m,n];
*/