/*
    All pairs shortest paths  (slow)
    slow all pairs shortest path
    can take -ve edges
    we have a weight matrix W where 
    1. no edge is infinity
    2. self loop is 0
    3. an edge  has a weight say x
    O(v^4)
    algorithm
    1. n = W.rows
       l' = W
    2. for m = 2 to n-1 
        let L^m be a matrix new n*n matrix
        fill matrix with the extended shorted paths(L^m-1,W)
    3. L^m
    L1 = W
    l2 = EXP(l1)
    .
    .
    Lm-1 = Lm-2
*/


/*
    Extended shortest paths(L,W)
    1. n = L.rows
    2. for let i = 1 to n 
        3. for j = 1 to n
         4. let L'[i,j] = infinity
          for let k = 1 to n 
            L[i,j] = min(L`[i,j],L[i,k]+ w[k,i])

    3. return L

*/


/*
    Faster (all pairs shortest path)
    L1= W
    l2 = EST,L,W
    L4 = EST(l2,L2)
    L8 = EST(l4,L4)

    O(lgV(V^3))
*/