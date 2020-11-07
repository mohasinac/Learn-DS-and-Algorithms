/*
    Stack is First In Last Out 
    Stack using an array
    Stack can also be implemented by using a linked list by inserting at begining always and removing at the begining 
*/
class Stack{
    constructor(capacity){
        this.size = 0;
        this.capacity = capacity;
        this.stack = Array(capacity);
        this.top = -1;
    }

    push(element){
        if((this.size + 1 )<= this.capacity ){
            this.top++;
            this.stack[this.top] = element;
            this.size++;
        }
        else{
            console.log("Error- Stack Overflow")
            return null;
        }
    }
    pop(){
        if(this.size>0){
            const element = this.stack[this.top];
            this.stack[this.top] = null;
            this.top--;
            this.size--;
            return element;
        }
        else{
            console.log("Error- Stack Underflow")
            return null;
        }
    }
    showStack(){
        if(this.size>0){
            console.log(this.stack);
            console.log(this.top);
        }
        else{
            console.log("Stack Empty")
        }
    }
}

let stack = new Stack(5);
stack.push(5)
stack.push(2)
stack.push(9)
stack.push(6)
stack.push(1);
stack.showStack();
stack.pop()
stack.showStack();

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

let testString1 = '(()[{}])' ;
let testString2 = '{[{}]())}' ;
console.log(checkParenthesis(testString1))
console.log(checkParenthesis(testString2))