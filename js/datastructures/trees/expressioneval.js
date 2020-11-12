const { BinaryTreeNode } = require('./binarySearchTree');
const { Stack } = require('./../stack/stack');
function ExpressionTreeFromPostfix(postFix){
    let stack = new Stack(postFix.length);
    for(let i of postFix){
        if(isOperator(i)){
            let tree = new BinaryTreeNode(i);
            tree.right = stack.pop();
            tree.left = stack.pop();
            stack.push(tree);
        }
        else{
            stack.push(new BinaryTreeNode(i));
        }
    }
    return stack.pop();
}

function isOperator(op) {
    if (op == '+' || op == '-' || op == '/' || op == '*' || op == '%') {
        return true
    }
    return false;
}

function operateOperator(op, A, B) {
    switch (op) {
        case '+':
            A = A + B
            break;
        case '-':
            A = A - B
            break;
        case '/':
            A = A / B
            break;
        case '*':
            A = A * B;
            break;
        case '%':
            A = A % B
        default:
            return null;
    }
    return A;
}


function EvalExpressionTree(treeRoot){
    function eval(root){
        if(isOperator(root.data)){
            return operateOperator(root.data, eval(root.left), eval(root.right) )
        }
        else{
            let operand = Number.parseInt(root.data);
            return operand;
        }
    }
    return eval(treeRoot);
}

let tree = ExpressionTreeFromPostfix('12+34-*')
console.log(tree);
console.log(EvalExpressionTree(tree))