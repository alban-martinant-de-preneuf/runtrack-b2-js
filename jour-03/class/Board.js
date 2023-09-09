export class Board {

    constructor() {
        this.initializeBoard()
    }

    initializeBoard() {
        this.grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ]

        this.hasWinner = false
    }

    displayBoard() {
        const board = document.getElementById('board')
        board.innerHTML = ""
        for (let i = 0; i < 3; i++) {
            const row = document.createElement('div')
            row.classList.add('row')
            for (let j = 0; j < 3; j++) {
                const button = document.createElement('button')
                button.classList.add('case')
                button.id = "btn-" + i + "-" + j
                button.innerHTML = this.grid[i][j]
                row.appendChild(button)
            }
            board.appendChild(row)
        }
    }

    placeMove(row, col, symbol) {
        if (this.grid[row][col] === "-") {
            this.grid[row][col] = symbol
            return true
        }
        return false
    }

    checkVictory() {
        const playerSymbols = ['X', 'O'];
        for (let playerSymbol of playerSymbols) {
            // verify rows
            for (let i = 0; i < 3; i++) {
                if (this.grid[i][0] === playerSymbol && this.grid[i][1] === playerSymbol && this.grid[i][2] === playerSymbol) {
                    this.hasWinner = true
                    return true
                }
            }
            // verify columns
            for (let i = 0; i < 3; i++) {
                if (this.grid[0][i] === playerSymbol && this.grid[1][i] === playerSymbol && this.grid[2][i] === playerSymbol) {
                    this.hasWinner = true
                    return true
                }
            }
            // verify diagonals
            const isDiag1 = this.grid[0][0] === playerSymbol && this.grid[1][1] === playerSymbol && this.grid[2][2] === playerSymbol;
            const isDiag2 = this.grid[0][2] === playerSymbol && this.grid[1][1] === playerSymbol && this.grid[2][0] === playerSymbol;
            if (isDiag1 || isDiag2) {
                this.hasWinner = true
                return true
            }
        }
        return false
    }


    isFull() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === "-") {
                    return false
                }
            }
        }
        return true
    }

    resetBoard() {
        this.initializeBoard()
        this.displayBoard()
    }
}