const { CircularQueue } = require('./../queue/circularQueue');
const { Stack } = require('./../stack/stack');
function DFS(graph){

}

function handleEdgeCheck(graph,x,i){
    if(graph.undirected){
        return graph.edges[x][i]==1 || graph.edges[i][x]==1
    }
    else{
        return graph.edges[x][i]==1;
    }
}
function BFS(graph,source=0){
    let visited = new Array(graph.vCount).fill(false);
    let queue = new CircularQueue(graph.vCount);
    graph.undirected = true;
    queue.enqueue([source,0]);
    visited[source] = true;
    let order = [];
    while(!queue.isEmpty()){
        let y= queue.dequeue();
        let x = y[0]
        order.push(y);
        for(let i = 0 ; i < graph.vCount; i++){
            if(handleEdgeCheck(graph,x,i) && !visited[i]){
                queue.enqueue([i,y[1]+1]);
                visited[i] = true;
            }
        }
    }
    return order;
}

module.exports = {
    DFS,
    BFS
}