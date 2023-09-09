export class Game {

    constructor(player1, player2, board) {
        this.player1 = player1
        this.player2 = player2
        this.board = board
        this.currentTurn = this.player1
    }

    startNewGame() {
        this.board.displayBoard()
        this.currentTurn = this.player1
        this.registerMove()
    }

    makeMove(row, col) {
        if (this.board.placeMove(row, col, this.currentTurn.symbol)) {
            this.board.displayBoard()
            if (this.checkGameOver()) {
                this.announceWinner()
            } else {
                this.switchTurn()
                this.registerMove()
            }
        }
    }

    registerMove() {
        const buttons = document.getElementsByClassName('case')
        for (let button of buttons) {
            button.addEventListener('click', (event) => {
                const id = event.target.id
                const row = parseInt(id.split('-')[1])
                const col = parseInt(id.split('-')[2])
                this.makeMove(row, col)
            })
        }
    }

    switchTurn() {
        this.currentTurn === this.player1 ? this.currentTurn = this.player2 : this.currentTurn = this.player1
        const currentPlayerP = document.getElementById('current-player')
        currentPlayerP.innerHTML = "À " + this.currentTurn.symbol + " de jouer !"
    }

    checkGameOver() {
        if (this.board.checkVictory() || this.board.isFull()) {
            return true
        }
    }

    announceWinner() {
        const message = document.getElementById('message')
        const currentPlayerP = document.getElementById('current-player')
        currentPlayerP.innerHTML = ""
        if (this.board.checkVictory()) {
            message.innerHTML = "Le joueur " + this.currentTurn.symbol + " a gagné !"
        } else if (this.board.isFull()) {
            message.innerHTML = "Match nul !"
        }
    }

    resetGame() {
        const message = document.getElementById('message')
        const currentPlayerP = document.getElementById('current-player')
        message.innerHTML = ""
        this.board.resetBoard()
        this.currentTurn = this.player1
        currentPlayerP.innerHTML = "À " + this.currentTurn.symbol + " de jouer !"
        this.registerMove()
    }

}