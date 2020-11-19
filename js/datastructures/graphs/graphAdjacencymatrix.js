/*
    Graph is a set of vertices V and set of edges E
    Graph can be directed or undirected
    a directed graph has an order of edges  and an edge u1u2 != u2u1
    whereas in undirected graph we do not have order and an edge u1u2 is same as u2u1
    path is a sequence of edges
    a graph can be cyclic if there is a path where it leads back to same vertex
    a disconnected graph has not all vertices connected via edges
    tree is a connected acyclic graph
    the number of edges in a graph of n vertices 
    1st one can have n-1 edges
    2nd one can have n-2
    ith one can have n-i edges
    nth one can have n-edges
    |E| = O(v^2)
    in connected graphs |E| >= |V| -1
    lg|E| = O(lg|V|)
*/
class Graph{
    constructor(vcount){
        this.vertices = new Set();
        this.edges = new Array();
        this.initialize(vcount);      
    }
    initialize(vcount){
        for(let i=0; i< vcount;i++){
            this.vertices.add(`v${i}`);
            this.edges.push(new Array(4).fill(0));
        }
    }
    addEdge(v1,v2){
        this.edges[v1][v2] = 1;
    }
    removeEdge(v1,v2){
        this.edges[v1][v2] = 0;
    }
}

let g = new Graph(4);
//vertices start from 0 to vcount-1
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,3);
console.log(g.edges);
console.log(g.vertices)
g.removeEdge(3,3);
console.log(g.edges);