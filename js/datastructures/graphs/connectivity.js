const { BFS , DFS } = require('./traversals');

function isConnected(graph){
    let order = BFS(graph);
    return order.length == graph.vCount;
}

function ConnectedComponents(graph){
    return [];
}

function CutVertices(graph){

}

module.exports = { isConnected , ConnectedComponents, CutVertices}