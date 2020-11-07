const { Stack } = require('./stack');

/* Stack Applications  */
//1. Paranthesis Check
/*
    when you see an opening bracket push it
    when you see closing bracket pop and compare the the popped element and 
    closing bracket and if they dont match then return false
    if after traversing the sting if the stack is empty then the string is correctly parenthesised
 */
function getClosingBracket(bracket){
    switch(bracket) {
        case ')':
            return '(';
        case ']':
            return '['
        case '}':
            return '{'
        default :
            return null;
    }
}
function checkParenthesis(inputString){
    let stack = new Stack(inputString.length);
    for(i=0;i<inputString.length;i++){
        if(inputString[i]==='(' || inputString[i]==='{' ||inputString[i]==='['){
            stack.push(inputString[i]);
        }
        else if(inputString[i]===')' || inputString[i]==='}' || inputString[i]===']'){
            let bracket = stack.pop();
            //console.log(bracket , getClosingBracket(inputString[i]))
            if(bracket != getClosingBracket(inputString[i])){
                return false;
            }
        }
    }
    return stack.size === 0 ;
}
module.exports = {
    checkParenthesis
}