const { Stack } = require('./stack');
const { checkParenthesis } = require('./checkParenthesis');

//Stack
let stack = new Stack(5);
stack.push(5)
stack.push(2)
stack.push(9)
stack.push(6)
stack.push(1);
stack.showStack();
stack.pop()
stack.showStack();

///Check Parenthesis
let testString1 = '(()[{}])' ;
let testString2 = '{[{}]())}' ;
console.log(checkParenthesis(testString1))
console.log(checkParenthesis(testString2))

//PostFix