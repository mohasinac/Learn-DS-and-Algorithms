/*
    Bellman-Ford algorithm
    1. initialize single source
    2. for say i from 1 to |G.V| -1 do 
    3.  for each edge (u,v) belongs to G.E
    4.      Relax(u,v,w) / w is weights list
    5  for each edge in G.E //correction for -ves
    6.  if v.d > u.d + w(u,v)
    7.      return false i.e. no single source shortest path due to -ve cycle , detect -ve cycle
    8. return true;

    -ve cycle if sum of all edges in a cycle is -ve, the nwe can reduce the cost by looping the cycle
 */