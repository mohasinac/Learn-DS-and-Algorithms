/*
    Flyodd-warshall algorithm
    fw(W)
    O(V^3)
    dynamic programming
    n = W.rows
    D0 = W
    for k = 1 to n
        let Dk = new array 
            for i=1 to n
                for j = 1 to n
                    d(i,j) = min(dk-1(i,j),dk-1(i,k) + dk-1(k,j))
                    if(di,j!= prev)pi(i,j) = k
    return Dk
*/