/*
    Problem
    Sack with carry of weight w , bunch of items each with an weight wi and each item cost is ci
    so the most efficient way to put items in the sack for max profit such that we put the whole item or don't place it
*/

/*
    K(w,n) => value of items in bag
    wt[i] = weight of item i
    val[i] = value of item i

    K(n-1,W) wt of nth element is > W , nth item is not part of knapsack
    
    max(K(n-1,W-wt[n]),K(n-1,W))
    else{
        nth item is taken or skipped
        1. taken
            K(n-1,W-wt[n])
        2. not taken
            K(n-1,W)
    }
*/

/*
    Dynamic programming code O(n*W)
    Knapsack(W,wt[],val[],n)
    K = [n+1][w+1]
    for(i=0 to n){
        for(w=0 to W){
            if(i==0 || w==0){
                K[i,w] = 0
            }
            else if(wt[i-1] <= w){
                k[i,w] = max(val[i-1]+k[i-1,w-wt[i-1]], K[i-1,w])
            }
            else{
                K[i,w] = K[i-1,w]
            }
        }
    }
*/
