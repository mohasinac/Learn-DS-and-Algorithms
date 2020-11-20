const { SinglyLinkedList } = require('./../linkedlists/singlylinkedlist');

/*
    space complexity is O(m+n)
    when m <<< n^2
    dense graph where number of edges is almost same as total number of edges which is
     n(n-1)/2 for undi-graph
     N * (N - 1) for di-graph
    sparsh graph where number of edges is very less than the total number of edges
*/
class Graph{
    constructor(vCount,undirected=0){
        this.vertices = new Set();
        this.edges = new Array();
        this.vCount = vCount;
        this.initializedEdges(vCount);
        this.inititalizeVertices(vCount)
        this.undirected=undirected;
        this.edgeCount = 0;
    }

    initializedEdges(vCount){
        for(let i=0;i<vCount;i++){
            this.edges.push( new SinglyLinkedList())
        }
    }
    inititalizeVertices(vCount){
        for(let i=0;i<vCount;i++){
            this.vertices.add(`v${i}`)
        }
    }
    addEdge(v1,v2){
        this.edges[v1].insert(v2);
        if(this.undirected){
            this.edges[v2].insert(v1);
        }
        this.edgeCount++;
    }
    removeEdge(v1,v2){
        this.edges[v1].delete(v2);
        if(this.undirected){
            this.edges[v2].delete(v1);
        }
        this.edgeCount--;
    }
}

module.exports = {
    Graph
}
