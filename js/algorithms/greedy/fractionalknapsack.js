/*
    Fractional Knapsack

    Greedy Algorithm Strategy
    Problem,
    say 1...n items and each item has a weight wt[i] and value val[i] with it
    And a knapsack of capacity of W

    Optimization : 
    objective : max value from knapsack
    constraints : {
        1. we can pick fractions
        2. total weight of knapsack is <= W
    }

    Solution :
    1. calculate value per unit weight
    2. pick item which is most value per weight and fill it as much as possible
    3. then repeat with the next items 
*/
/*
    Optimal Substructure
    1. an optimal solution will contain optimal solutions of sub problems
    Greedy Choice
    1. choosing the best at each step, greedily pick a solution which leads to a best solution
    Dynamic P
*/