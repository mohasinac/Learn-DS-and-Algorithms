const { CircularQueue } = require('./../queue/circularQueue');
const {Graph} = require('./graphAdjacencymatrix');

function DFSCC(graph){
    let visited = new Array(graph.vCount);
    for(let i=0;i<graph.vCount;i++){
        visited[i]=({
            color : 'WHITE',
            parent : null,
            detected : null,
            final : null
        });
    }
    let order = [];
    let time = 0;
    for(let i =0;i < graph.vCount;i++){
        if(visited[i].color == 'WHITE'){
            time = DFSCCUtil(graph, i,visited , time ,order);
        }
    }
    return visited;
}

function  DFSCCUtil(graph, vertex,visited , time ,order){
    time++;
    visited[vertex].detected = time;
    visited[vertex].color = 'GRAY';
    for(let i=0;i < graph.vCount;i++){
        console.log(graph.edges[vertex][i],visited[i].color)
        if(visited[i].color == 'WHITE' && graph.edges[vertex][i] == 1){
            visited[i].parent = vertex;
            time = DFSCCUtil(graph,i,visited,time,order);
        }
    }
    visited[vertex].color = 'BLACK';
    time++;
    visited[vertex].final = time;
    return time;
}

function BFSCC(){

}

module.exports = {
    DFSCC,
    BFSCC
}


let g = new Graph(4);
//vertices start from 0 to vCount-1
g.addEdge(0, 1);
//g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);

console.log(DFSCC(g));