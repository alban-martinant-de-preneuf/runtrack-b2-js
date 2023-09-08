import { Player } from "./class/Player.js";
import { Board } from "./class/Board.js";

const p = new Player("X", true);
const b = new Board();

b.displayBoard();
b.placeMove(0,0,"X")