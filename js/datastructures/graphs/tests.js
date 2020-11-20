const {Graph} = require('./graphAdjacencymatrix');
const { Graph : GraphList } = require('./graphadjacencyLists');
const { BFS , DFS } = require('./traversals');
const  { isConnected , ConnectedComponents, CutVertices} = require('./connectivity');

let g = new Graph(4);
//vertices start from 0 to vCount-1
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 3);
console.log(g.edges);
console.log(g.vertices)
console.log(g.getEdges(3));

console.log(DFS(g));
console.log(BFS(g));
console.log(BFS(g,3));

g.removeEdge(3, 3);
console.log(g.edges);
console.log(g.getEdges(3));

let gl = new GraphList(4);
gl.addEdge(1,2);
gl.addEdge(2,3);
gl.addEdge(2,1);
console.log(gl.vertices);
console.log(gl.edges);
gl.removeEdge(2,1);
console.log(gl.edges);