const {JsArray} = require('./array');

let rowArray = new JsArray(2,3);
for(let i=0;i<2;i++){
    for(let j=0;j<3;j++){
        rowArray.setRowMajor(`${i},${j}`,i,j)
    }
}
console.log(rowArray.show());


let colArray = new JsArray(2,3);
for(let i=0;i<2;i++){
    for(let j=0;j<3;j++){
        colArray.setColMajor(`${i},${j}`,i,j)
    }
}
console.log(colArray.show())

console.log(rowArray.getRowMajor(1,2)==colArray.getRowMajor(1,2))