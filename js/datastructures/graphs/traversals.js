const { CircularQueue } = require('./../queue/circularQueue');
const { Stack } = require('./../stack/stack');

function handleEdgeCheck(graph,x,i){
    if(graph.undirected){
        return graph.edges[x][i]==1 || graph.edges[i][x]==1
    }
    else{
        return graph.edges[x][i]==1;
    }
}


function DFS(graph){
    let visited = new Array(graph.vCount).fill
}


/*
    time complexity
    for a graph G(V,E)
    enqueue happens only if not visited
    number of enqueue and queue is O(|V|)
    for each edge of a vertex X , we have to list all of them for adjacency
    therefor O(|E|)

    hence the total time complexity would be O(|V|+|E|)
    in case of dense graph this become O(|V| + O(|V^2)) = O(|V|^2)
    space complexity is O(|V|)

    Applications
    1. Shortest path from node S to another node U in the unweighted graph
    2. web crawlers
*/
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
                visited[i] = [i,x];
                queue.enqueue([i,y[1]+1]);
            }
        }
    }
    for(let i=0;i<graph.vCount;i++){
        if(!visited[i]){
            order.push([i,Number.POSITIVE_INFINITY ])
        }
    }
    return { order, visited };
}

module.exports = {
    DFS,
    BFS
}