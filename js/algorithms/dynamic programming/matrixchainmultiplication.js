/*

    Number of operations to perform the multiplication of matrices
    Find the min number of operations needed
    e.g. A , B,, C such that  (AB)C or A(BC)

    just selecting the order of  multiplication we can save up on large number of operations
    R= A1A2.....An
    A1 = P0 * P1
    A2 = P1 *P2
    ...
    AN= Pn-1 * Pn
    we have P as an array of them
    Optimal order of multiplications
*/

/*
    typical solution is Catalan number which is Omega of 2 ^n time complexity
    Subproblem
    M[i,j] = 0 if (i==j)
            {
                min 1<=k<j for which the opterations are minimum for smaller chunks
                M[i,k]+M[k+1,j]+Pi*Pk*Pj
            }
 */
/*
    algorithm  O(n^3)
    matrix-chain-mul(p)
        n = p.length -1
        let m[1..n][1..n] and s[1..n-1,2...n] be new tables
        for i=0 to n
            m[i,i] = 0;
        for l= 2to n // l is the chain length
            for i == 1 to n-l+1
                j = i+l - 1
                m[i,j] = infinity
                for k=i to j-1
                    q = m[i,k] +m[k+1,p] + pi-1*pk*pj
                    if( q < m[i,kj])
                        m[i,j] = q
                        s[i,j] = k
        return m,s
        
*/