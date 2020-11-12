const { Sudoku } = require('./sudoku');

let grid = [    [3, -1, 6, 5, -1, 8, 4, -1, -1],
[5, 2, -1, -1, -1, -1, -1, -1, -1],
[-1, 8, 7, -1, -1, -1, -1, 3, 1],
[-1, -1, 3, -1, 1, -1, -1, 8, -1],
[9, -1, -1, 8, 6, 3, -1, -1, 5],
[-1, 5, -1, -1, 9, -1, 6, -1, -1],
[1, 3, -1, -1, -1, -1, 2, 5, -1],
[-1, -1, -1, -1, -1, -1, -1, 7, 4],
[-1, -1, 5, 2, -1, 6, 3, -1, -1]
];

let answer = [  [3, 1, 6, 5, 7, 8, 4, 9, 2],
[5, 2, 9, 1, 3, 4, 7, 6, 8],
[4, 8, 7, 6, 2, 9, 5, 3, 1],
[2, 6, 3, 4, 1, 5, 9, 8, 7],
[9, 7, 4, 8, 6, 3, 1, 2, 5],
[8, 5, 1, 7, 9, 2, 6, 4, 3],
[1, 3, 8, 9, 4, 7, 2, 5, 6],
[6, 9, 2, 3, 5, 1, 8, 7, 4],
[7, 4, 5, 2, 8, 6, 3, 1, 9]
];

let sudoku = new Sudoku(grid, -1);
let solution = sudoku.solve();
if(solution){
    let correct = true;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9;j++) {
            if(answer[i][j]!=solution[i][j]){
                correct = false;
                break;
            }
            if(!correct){break};
        }
    }
    if(correct){
        console.log('Correct Answer!')
    }
    else{
        console.log('Wrong Answer!')
    }
}   
else{
    console.log('No solution exists!')
}