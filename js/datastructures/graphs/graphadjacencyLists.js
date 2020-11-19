const { SinglyLinkedList } = require('./../linkedlists/singlylinkedlist');

class Graph{
    constructor(vCount){
        this.vertices = new Set();
        this.edges = new Array();
        this.initializedEdges(vCount);
        this.inititalizeVertices(vCount)
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
    addEgge(v1,v2){
        this.edges[v1].insert(v2);
    }
    removeEdge(v1,v2){
        this.edges[v1].delete(v2);
    }

}

module.exports = {
    Graph
}

let g = new Graph(4);
g.addEgge(1,2);
g.addEgge(2,3);
g.addEgge(2,1);
console.log(g.vertices);
console.log(g.edges);
g.removeEdge(2,1);
console.log(g.edges);