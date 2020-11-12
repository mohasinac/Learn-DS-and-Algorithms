/**
        1) Start in the leftmost column
        2) If all queens are placed
            return true
        3) Try all rows in the current column. 
        Do following for every tried row.
            a) If the queen can be placed safely in this row 
            then mark this [row, column] as part of the 
            solution and recursively check if placing
            queen here leads to a solution.
            b) If placing the queen in [row, column] leads to
            a solution then return true.
            c) If placing queen doesn't lead to a solution then
            unmark this [row, column] (Backtrack) and go to 
            step (a) to try other rows.
        3) If all rows have been tried and nothing worked,
        return false to trigger backtracking.
 */
class NQueens{
    constructor(numOfQueens, boardSize , queenSym ,emptySym) {
       
        this.board = this.createBoard(boardSize, emptySym);
        this.numOfQueens = numOfQueens;
        this.queenSym = queenSym;
        this.emptySym = emptySym;
    }
    createBoard(boardSize , emptySym){
        var arr = Array(boardSize);
        for(let i=0;i<boardSize;i++){
            arr[i] = new Array(boardSize);
            for(let j=0;j< boardSize;j++){
                arr[i][j] = emptySym;
            }
        }
        return arr;
    }
    isSafe(row,col){
        let i=0;
        let j=0; 
  
        /* Check this row on left side */
        for (i = 0; i < col; i++) 
            if (this.board[row][i] ===  this.queenSym ) 
                return false; 
  
        /* Check upper diagonal on left side */
        for (i = row, j = col; i >= 0 && j >= 0; i--, j--) 
            if (this.board[i][j] ===  this.queenSym ) 
                return false; 
  
        /* Check lower diagonal on left side */
        for (i = row, j = col; j >= 0 && i < this.numOfQueens; i++, j--) 
            if (this.board[i][j] ===  this.queenSym ) 
                return false; 
  
        return true; 
    }

    solveUtil(col){
        /* base case: If all queens are placed 
           then return true */
           if (col >= this.numOfQueens){
                return this.board; 
           }
 
       /* Consider this column and try placing 
          this queen in all rows one by one */
        for (let i = 0; i < this.numOfQueens; i++) { 
            /* Check if the queen can be placed on 
                board[i][col] */
            if (this.isSafe(i, col)) { 
                /* Place this queen in board[i][col] */
                this.board[i][col] = this.queenSym; 
                /* recur to place rest of the queens */
                if (this.solveUtil(col + 1)){
                    return this.board; 
                }
                else{
                    /* If placing queen in board[i][col] 
                        doesn't lead to a solution then 
                        remove queen from board[i][col] */
                    this.board[i][col] = this.emptySym; // BACKTRACK 
                }
            } 
        } 
    
        /* If the queen can not be placed in any row in 
            this colum col, then return false */
        return false; 
    }
    solve(){
        if(this.numOfQueens <=this.board.length){
            return this.solveUtil(0);
        }
        else{
            return false;
        }
    }
}

module.exports = {
    NQueens
}