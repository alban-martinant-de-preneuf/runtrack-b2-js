import { Player } from "./class/Player.js";
import { Board } from "./class/Board.js";
import { Game } from "./class/Game.js";

const currentPlayerP = document.getElementById('current-player')

const symbols = ['X', 'O']

const player1 = new Player(symbols[0], true)
const player2 = new Player(symbols[1], false)

const board = new Board()

const game = new Game(player1, player2, board)

currentPlayerP.innerHTML = "À " + game.currentTurn.symbol + " de jouer !"

game.startNewGame()

const startButton = document.getElementById('play')

startButton.addEventListener('click', () => {
    game.resetGame()
})