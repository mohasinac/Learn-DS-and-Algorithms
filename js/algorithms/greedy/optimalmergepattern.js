/*
    merging k sorted list of size s1,s2,...sk
    multiple 2 way merges these lists 
    for k lists we will have k-1 2 way merges

    optimal merge pattern problem says :
        optimal order of merging these lists to minimize the total cost of these merges
*/

/*
    Greedy Approach
    1. Greedily pick two smallest list to merge at every iteration
    with the help of min-heap the time complexity is O(nlogn)
*/