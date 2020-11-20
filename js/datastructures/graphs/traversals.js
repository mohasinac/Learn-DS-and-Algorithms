const { CircularQueue } = require('./../queue/circularQueue');
const { Stack } = require('./../stack/stack');
function DFS(graph){

}

function BFS(graph,source=0){
    let visited = new Array(graph.vCount).fill(false);
    let queue = new CircularQueue(graph.vCount);
    queue.enqueue(source);
    visited[source] = true;
    let order = [];
    while(!queue.isEmpty()){
        let x = queue.dequeue();
        order.push(x);
        for(let i = 0 ; i < graph.vCount; i++){
            if(graph.edges[x][i]==1 && !visited[i]){
                queue.enqueue(i);
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