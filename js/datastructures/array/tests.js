const {JsArray} = require('./array');

let array = new JsArray(2,3);
let t1 = array.getRowMajor(1,2);
array.setRowMajor(5,1,2);
let t3= array.getRowMajor(1,2);

console.log(t1,t3);