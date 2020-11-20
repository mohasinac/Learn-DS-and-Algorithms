const {Graph} = require('./graphAdjacencymatrix');
const { Graph : GraphList } = require('./graphadjacencyLists');
const { BFS , DFS } = require('./traversals');
const  { isConnected , ConnectedComponents, CutVertices} = require('./connectivity');

let g = new Graph(4);
//vertices start from 0 to vCount-1
g.addEdge(0, 1);
//g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
console.log(g.edges);
console.log(g.vertices)
console.log(g.getEdges(3));

console.log(DFS(g));
console.log(`for 0 `,BFS(g));
console.log(`for 3 `,BFS(g,3));
console.log(`G is connected `, isConnected(g))
if(!isConnected(g)){
    let kC = ConnectedComponents(g);
    console.log('connected components are', kC.length ,'and they are : ', kC.join() )
}
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