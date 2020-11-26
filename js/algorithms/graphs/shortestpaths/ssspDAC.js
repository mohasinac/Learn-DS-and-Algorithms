/*
    SSSP in DAC , O(V+E) 
    1. topological sort the vertices
    2. iniitalize SSSp on graph 
    3. take each vertex u in the topological sort and do the following
    4 .for each adjacent edge of u , say (u,v)
        5. relax(u,v,w) 

*/