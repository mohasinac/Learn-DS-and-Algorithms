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
class Graph {
    //type 0 means directed graph / di-graph
    // type 1 means undirected graph
    constructor(vCount, undirected = 0) {
        this.vertices = new Set();
        this.vCount = vCount;
        this.edges = new Array();
        this.initialize(vCount);
        this.undirected = undirected;
        
        this.edgeCount = 0;
    }

    constructor(vertices,undirected=0){
        this.vertices = new Set(vertices);
        this.edges = new Array();
        this.initializeMatrix(vertices.length)
        this.undirected = undirected;
        this.edgeCount = 0;
    }
    initializeVertices(vCount){
        for(let i=0;i<vCount;i++){
            this.vertices.add(`v${i}`);
        }
    }
    //initialized the adjacency matrix
    initializeMatrix(vCount) {
        for (let i = 0; i < vCount; i++) {
            this.edges.push(new Array(4).fill(0));
        }
    }

    //add an edge between v1 and v2
    addEdge(v1, v2) {
        this.edges[v1][v2] = 1;
        if (this.undirected) {
            this.edges[v2][v1] = 1;
        }
        this.edgeCount++;
    }
    //removes an edge between v1 and v2
    removeEdge(v1, v2) {
        this.edges[v1][v2] = 0;
        if (this.undirected) {
            this.edges[v2][v1] = 0;
        }
        
        this.edgeCount--;
    }

    //gets egdges for a vertex v O(n) times
    getEdges(v) {
        let coming = [];
        let going = [];
        for (let i = 0; i < this.vCount; i++) {
            if(this.edges[v][i] == 1){
                going.push([v,i])
            }
            if(this.edges[i][v]==1){
                coming.push([i,v])
            }
        }
        return {
            coming,
            going
        }
    }
}

module.exports = {
    Graph
}

let g = new Graph(4);
//vertices start from 0 to vCount-1
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.addEdge(3, 2);
g.addEdge(0, 3);
console.log(g.edges);
console.log(g.vertices)
console.log(g.getEdges(3));
g.removeEdge(3, 3);
console.log(g.edges);
console.log(g.getEdges(3));