const { Stack } = require('./stack');
const alphaNum = /^[a-zA-Z0-9_]$/gm
//1. Infix to Postfix
/*
    There are 3 types of expressions based on the place where the operands and operator is present
    Infix - where the operator is in between the operands e.g. A+B
    Postfix - where the operator is after the operands e.g. AB+ , reverse polish
    Prefix - where the operator is before the operands e.g. +AB , polish
*/

function opPriority(op){
    if(op == '*' || op == '/' || op=='%'){
        return 2;
    }
    else if(op =='+' || op =='-'){
        return 1;
    }
    else{
        return 0;
    }
}

function isOperator(op){
    if(op=='+'||op=='-'||op=='/'||op=='*'||op=='%'){
        return true
    }
    return false;
}

function operateOperator(op, A , B){
    switch(op){
        case '+':
            A = A+B
            break;
        case '-':
            A = A-B
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

function infixToPostfixConversion(inputExp){
    let result = '';
    let stack = new Stack(inputExp.length);
    for(i=0;i<inputExp.length;i++){
        let c = inputExp[i];
        let found =  c.match(alphaNum);
        if(c =='('){
            stack.push(inputExp[i]);
        }
        else if( c == ')'){
            let x = stack.pop();
            while(x != '('){
                result += x;
                x = stack.pop();
            }
        }
        else if(found && found.length > 0){
            result += c;
        }
        else {
            while(opPriority(stack.getTopElement()) >= opPriority(c)){
                result += stack.pop();
            }
            stack.push(c);
        }
    }
    let j = stack.pop()
    while(j != null){
        result += j;
        j = stack.pop();
    }
    return result;
}
function infixToPrefixConversion(inputExp){
    let result = '';
    return result;
}
function evaluatePrefix(inputExp){

}
function evaluatePostFix(inputExp){

}

let testString = '(2*3+4*(5-6))';

console.log(infixToPostfixConversion(testString));
console.log(infixToPrefixConversion(testString));

module.exports = {
    infixToPostfixConversion ,
    infixToPrefixConversion ,
    evaluatePrefix ,
    evaluatePostFix
}