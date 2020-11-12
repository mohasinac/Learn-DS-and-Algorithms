/*
    Full Binary Tree
    Every node has either two or zero children
*/

/*
    for height h 
    min would be when each node has child with two children and one with 0 children till we reach height h
    i.e. we expand only on right / left i.e. each level has 2 nodes only
    max would be when each node has 2 children which has 2 children till we reach height h
    i.e. we expand both left and right nodes  => each level has 2^n nodes 
    max = 1 + 2 + 4 + ... 2^h =>  w^n -1 
    min = 1 + (2 +2 +2 ..h times) = 1 + 2 *h
 */
function NodesOfFullBinTreeByHeight(height){
    let min=0;
    let max=0;
    min = 2*height +1;
    max = Math.pow(2,height+1)-1;
    return {
        min,
        max
    }
}

/*
    Perfect Binary tree
    each node has 2 children except for last level 
    all leaves are at same level
*/

/*
    if height is h 
    each node has to have 2 children no other way till we reach height h
    so number of nodes would be 1+2+4+...2^h
    so min=max = 2^h+1 -1 ( gp sum is a(r^n+1 -1)/(r-1) a = 1 and r = 2 )
*/
function PerfectBinTreeNodesByHeight(height){
    let nodes =  Math.pow(2,height+1) -1;
    let leaves =  Math.pow(2,height) ;
    let nonleaves = Math.pow(2,height) -1;
    console.log(nodes - leaves == nonleaves);
    return {
        nodes,leaves,
        nonleaves
    }
}

/*
    Complete Binary trees
    every level is fulled except for the last level 
    last level is fille from left to right
*/
function CompleteBinaryTreeNodesbyHeight(height){
    let min = Math.pow(2,height) +1;
    let max = Math.pow(2,height+1) - 1;
    return {
        min,
        max
    }
}
function CompleteBinaryTreeNodesByNodes(nodes){
    let internals = Math.floor(nodes);
    return {
        internals
    }
}

module.exports = {
    NodesOfFullBinTreeByHeight,
    PerfectBinTreeNodesByHeight,
    CompleteBinaryTreeNodesbyHeight,
    CompleteBinaryTreeNodesByNodes
}