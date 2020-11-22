/*
    each edge has a distance
*/
class WeightedGraph {
    //type 0 means directed graph / di-graph
    // type 1 means undirected graph
    constructor(vCount, undirected = 0) {
        this.vertices = new Set();
        this.vCount = vCount;
        this.edges = new Array();
        this.initializeVertices(vCount);
        this.initializeMatrix(vCount);
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
    addEdge(v1, v2,weight) {
        this.edges[v1][v2] = weight;
        if (this.undirected) {
            this.edges[v2][v1] = weight;
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
            if(this.edges[v][i]){
                going.push([v,i])
            }
            if(this.edges[i][v]){
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
    WeightedGraph
}
