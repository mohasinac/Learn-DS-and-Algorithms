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
        //console.log(graph.edges[vertex][i],visited[i].color)
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

function BFSCC(graph,source=0){
    let visited = new Array(graph.vCount);
    for(let i=0;i<graph.vCount;i++){
        visited[i] = {
            color : 'WHITE',
            parent : null,
            distance : Number.POSITIVE_INFINITY
        }
    }
    visited[source].color = 'GRAY';
    visited[source].distance = 0;
    visited[source].parent = null;
    let queue = new CircularQueue(graph.vCount);
    queue.enqueue(source);
    while(!queue.isEmpty()){
        let vertex = queue.dequeue();
        for(let i=0;i<graph.vCount;i++){
            //console.log(graph.edges[vertex][i],graph.edges[i][vertex])
            if(visited[i].color == 'WHITE' && 
                (graph.edges[vertex][i] == 1 || graph.edges[i][vertex] == 1)){
                    visited[i].color = 'GRAY';
                    visited[i].distance = visited[vertex].distance + 1;
                    visited[i].parent = vertex;
                    queue.enqueue(i);
            }
        }
        visited[vertex].color = 'BLACK';
    }
    return visited;
}

module.exports = {
    DFSCC,
    BFSCC
}


let g = new Graph(4);
//vertices start from 0 to vCount-1
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);

console.log(DFSCC(g));
console.log(BFSCC(g));