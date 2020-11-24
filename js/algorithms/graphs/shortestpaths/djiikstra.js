/*
    It is a single source shortest path
    works only if all edge weights are non-negative

    1. Initialize single source G and source
    2.  have a priority queue with min heap with all the vertices
    3. while q is not empty do the following
    4. extract min and add it to the S
    4. for each vertex adjacent to extracted min, RELAX the extracted , source ,and weights

    
*/
