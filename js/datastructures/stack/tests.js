const { Stack } = require('./stack');
const { checkParenthesis } = require('./checkParenthesis');
const {
    infixToPostfixConversion,
    infixToPrefixConversion,
    evaluatePrefix,
    evaluatePostFix
} = require('./expressionConvertions');
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

//expressions

let testString = '(2*3+4*(5-6))';
let postFix = infixToPostfixConversion(testString)
let preFix = infixToPrefixConversion(testString)
let eval1 = evaluatePostFix(postFix);
let eval2 = evaluatePrefix(preFix)
console.log(postFix);
console.log(preFix);
console.log(eval1)
console.log(eval2);
console.log(eval1 == eval2)
