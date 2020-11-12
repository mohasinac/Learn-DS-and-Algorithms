/*

    Simplest sudoku algorithm with backtracking
    to solve an 9*9 sudoku using trees
    goal: fill all cells such that 
    1. each row has all 1-n without repeat
    2. each col has all 1-n without repeat
    3. each subgrid should have a 3*3 grid has 1-9 without repeat
*/
const { KTree , KTreeNode} = require('./../../datastructures/trees/ktree');
class Sudoku {
    constructor(grid, emptySym) {
        this.grid = grid;
        this.emptySym = emptySym;
    }
    /*
        uses Trees
    */
   isValid(num,row,col) { 
        // Row has the unique (row-clash) 
        for (let d = 0; d < this.grid.length; d++)  
        { 
            // Check if the number we are trying to 
            // place is already present in 
            // that row, return false; 
            if (this.grid[row][d] == num) { 
                return false; 
            } 
        } 

        // Column has the unique numbers (column-clash) 
        for (let r = 0; r < this.grid.length; r++)  
        { 
            // Check if the number  
            // we are trying to 
            // place is already present in 
            // that column, return false; 
            if (this.grid[r][col] == num)  
            { 
                return false; 
            } 
        } 
        // Corresponding square has 
        // unique number (box-clash) 
        let sqrt = Math.sqrt(this.grid.length); 
        let boxRowStart = row - row % sqrt; 
        let boxColStart = col - col % sqrt; 

        for (let r = boxRowStart; r < boxRowStart + sqrt; r++)  
        { 
            for (let d = boxColStart; d < boxColStart + sqrt; d++)  
            { 
                if (this.grid[r][d] == num)  
                { 
                    return false; 
                } 
            } 
        } 
        // if there is no clash, it's safe 
        return true; 
    }

    solve() {
        let row = -1; 
        let col = -1; 
        let isEmpty = true; 
        for (let i = 0; i < this.grid.length; i++)  
        { 
            for (let j = 0; j < this.grid[i].length; j++)  
            { 
                if (this.grid[i][j] == this.emptySym)  
                { 
                    row = i; 
                    col = j; 
                    // We still have some remaining 
                    // missing values in Sudoku 
                    isEmpty = false; 
                    break; 
                } 
            } 
            if (!isEmpty) { 
                break; 
            } 
        }
        // No empty space left 
        if (isEmpty)  
        { 
            return this.grid; 
        } 
  
        // Else for each-row backtrack 
        for (let num = 1; num <= this.grid.length; num++)  
        { 
            if (this.isValid(num, row, col))  
            { 
                this.grid[row][col] = num; 
                if (this.solve())  
                { 
                    return this.grid; 
                } 
                else 
                { 
                    // replace it 
                    this.grid[row][col] = this.emptySym; 
                } 
            } 
        } 
        return false; 
    }
}

module.exports = {
    Sudoku
}