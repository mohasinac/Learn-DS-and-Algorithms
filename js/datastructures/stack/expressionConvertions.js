const { Stack } = require('./stack');
const alphaNum = /^[a-zA-Z0-9_]$/gm
//1. Infix to Postfix
/*
    There are 3 types of expressions based on the place where the operands and operator is present
    Infix - where the operator is in between the operands e.g. A+B
    Postfix - where the operator is after the operands e.g. AB+ , reverse polish
    Prefix - where the operator is before the operands e.g. +AB , polish
*/


/* 
    gives the operator precedence
*/
function opPriority(op) {
    if (op == '*' || op == '/' || op == '%') {
        return 2;
    }
    else if (op == '+' || op == '-') {
        return 1;
    }
    else {
        return 0;
    }
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

/*
    For infix to postfix we do the following
    1. determine to operator precedence
    2. iterate through the input while doing the next
    3. if the character reac is number / alphabet we add it to the result
    4. if it is opening bracket we push to stack
    5. if it is closing bracket we pop items from the stack and add to result until we find a closing bracket
    6. if it is an operator we check for it priority and compare with  the stacks top operators 
    7. if the priority is more than the ones in stack we first add the ones in stack to result 
    8. then we add it to the result
    9. we do it until we reach end of loop
 */
function infixToPostfixConversion(inputExp) {
    let result = '';
    let stack = new Stack(inputExp.length);
    for (i = 0; i < inputExp.length; i++) {
        let c = inputExp[i];
        let found = c.match(alphaNum);
        if (c == '(') {
            stack.push(inputExp[i]);
        }
        else if (c == ')') {
            let x = stack.pop();
            while (x != '(') {
                result += x;
                x = stack.pop();
            }
        }
        else if (found && found.length > 0) {
            result += c;
        }
        else {
            while (opPriority(stack.getTopElement()) >= opPriority(c)) {
                result += stack.pop();
            }
            stack.push(c);
        }
    }
    let j = stack.pop()
    while (j != null) {
        result += j;
        j = stack.pop();
    }
    return result;
}

/*
    Reveres as given input expression with brackets
*/
function invertInputExp(inputExp) {
    let result = '';
    for (i = inputExp.length - 1; i >= 0; i--) {
        let c = inputExp[i];
        if (c == '(') {
            result += ')';
        }
        else if (c == ')') {
            result += '('
        }
        else {
            result += inputExp[i];
        }
    }

    return result;
}
/*
    To convert infix to prefix we do the following 3 steps
    1. reverse the input expression
    2. convert the input infix expr to postfix expr
    3. reverse the postfix expr to get prefix expr

    the logic is that postfix is reverse-polish and prefix is polish
*/
function infixToPrefixConversion(inputExp) {
    let result = '';
    result = infixToPostfixConversion(invertInputExp(inputExp));
    return invertInputExp(result);
}
function evaluatePrefix(inputExp) {
    let result = 0;
    let stack = new Stack(inputExp.length);
    try {
        for (i = inputExp.length -1 ; i >= 0; i--) {
            c = inputExp[i];
            if (isOperator(c)) {
                //do operation
                let A = stack.pop();
                let B = stack.pop();
                B = operateOperator(c, A, B);
                stack.push(A);
            }
            else if ( c=='(' || c==')'){
                //Do nothing
            }
            else {
                stack.push(Number.parseInt(c))
            }
        }

    } catch (error) {
        console.log(error);
        return null;
    }
    result = stack.pop();
    return result;
}
function evaluatePostFix(inputExp) {
    let result = 0;
    let stack = new Stack(inputExp.length);
    try {
        for (i = 0; i < inputExp.length; i++) {
            c = inputExp[i];
            if (isOperator(c)) {
                //do operation
                let B = stack.pop();
                let A = stack.pop();
                A = operateOperator(c, A, B);
                stack.push(A);
            }
            else if ( c=='(' || c==')'){
                //Do nothing
            }
            else {
                stack.push(Number.parseInt(c))
            }
        }

    } catch (error) {
        console.log(error);
        return null;
    }
    result = stack.pop();
    return result;
}

module.exports = {
    infixToPostfixConversion,
    infixToPrefixConversion,
    evaluatePrefix,
    evaluatePostFix
}