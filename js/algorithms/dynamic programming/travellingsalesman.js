/*
    Travelling Salesman Problem
    given n cities , let start at origin city , create a path
    visit each city and come back to origin such that the path length is minimal
*/

/*
    Brute Force
    n cities , permutations/ordering of n cities 
    n! factorial permutations , compute each permutation , calculate length and find min length in them 
    O(n!)
*/

/*
    Recursive form
    V = { 1,2... n}
    source = 1
    d[i,j] = distance between i and j
    S belongs to V
    simple recursion is O(n^n) similar to O(n!)
    minimum length path from i to every vertex in set S and back to vertex 1
    TSP(i,S) = {
        d[i,1] , S={ } i.e. S is null set //base case 
        or 
        min { k belongs to set S
            d[i,k] + TSP(k,s-{k}) i.e. cost of going to k from i and then visiting all remaining vertices in S from k
        }
    }
*/

/*
    sub-problems:
        1. from each vertex i go to other vertices in S
    overlapping sub-problems :
    Held Carp O(2^n*n^2) time and O(2^n*n)space complexity
    tabulation 
        1. Table[i,k] can be saved in table
*/