
/*
    Spanning tree has the same vertices as in a graph T.V == G.V
    while having only a subset of edges in the graph  T.E <= G.E
    length of a spanning tree is sum of all the edges
*/

/*
    Min Spanning tree :
        a graph can have can have many spanning trees and a min spanning tree is the one with the least 
        sum of edge weights
*/

/*
    Applications 
    1.  reduced cost of communication lines/gas/distance covered
    2. electronic wiring costs and resistance/heat
*/

/*
    1. E,V spanning tree has V-1 edges
    2. If you add any edge to spanning tree, it would be cyclic
    3. many MST of same weight
    4. if each edge has distinct weight then you will have exactly 1 unique MST
    5. cycle property - in a cycle , the largest edge has no chance of being in MST
    6. Cut property - for any cut c in the graph, if weight of an edge in the cut set is strictly smaller than all other weights
                    in the cut set then this edge must be part of MST
    7. min-edge-edge : if in a graph we have smallest edge then it belongs to MST
*/

/*
    Prims Algorithm : Greedily pick vertices based on their key value ,O(mlogn)
    1. each vertex has key and predecessor O(n)
    2. auxillary ds which is a min heap or priority queue to extract the minimum element or to modify a value in the heap
    3. for each vertex make the key as infinity and predecessor as null
    4. root.key =0 
    5. put these vertices in the min heap/priority queue O(n)
    6. repeat step 7 to 9 until queue is empty
    7. extract min say u
    8 for each adjacent vertex v of u if( v belongs to Q ) and edge(u,v) has weight less than the v.key
    9. then v.parent is u and v.key is weight of edge (u,v) 
*/
function PrimsAlgorithmSpanTree(graph,weights,root){

}


/*
    Kruskal's Algorithm : Greedy algorithm O(nlogm) {taken to sort} greedily pick edges
    1. for each vertex create a set for that vertex i.e. for x vertices we have x sets let these super set be S
    2. sort the edges of the graph in non-decreasing order by weight w
    3. for every edge (u,v) in this sorted list , if( u!=v) and u doesn't belong to same set as v  add this edge to our tree say A and merge sets of {u,v} now S will have S-1 sets
*/
function KruskalsAlgorithmSpanTree(graph){

}