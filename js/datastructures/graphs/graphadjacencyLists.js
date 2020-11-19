const { SinglyLinkedList } = require('./../linkedlists/singlylinkedlist');

class Graph{
    constructor(vCount,undirected=0){
        this.vertices = new Set();
        this.edges = new Array();
        this.initializedEdges(vCount);
        this.inititalizeVertices(vCount)
        this.undirected=undirected;
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
    }
    removeEdge(v1,v2){
        this.edges[v1].delete(v2);
        if(this.undirected){
            this.edges[v2].delete(v1);
        }
    }

}

module.exports = {
    Graph
}

let g = new Graph(4);
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(2,1);
console.log(g.vertices);
console.log(g.edges);
g.removeEdge(2,1);
console.log(g.edges);