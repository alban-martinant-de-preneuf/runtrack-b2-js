const textDisplayer = document.getElementById('text-displayer');
const inputText = document.getElementById('input-text');
const turnTextBoldBtn = document.getElementById('turn-text-bold');
const turnTextItalicBtn = document.getElementById('turn-text-italic');
const clearTextBtn = document.getElementById('clear-text');

function myDisplayText() {
    textDisplayer.textContent = inputText.value;
}

function myTurnBold() {
    textDisplayer.style.fontWeight = "bold";
}

function myTurnItalic() {
    textDisplayer.style.fontStyle = "italic";
}

function myClearText() {
    textDisplayer.textContent = "";
    inputText.value = "";
    textDisplayer.style.fontWeight = "normal";
    textDisplayer.style.fontStyle = "normal";
}

inputText.addEventListener('input', myDisplayText);
turnTextBoldBtn.addEventListener('click', myTurnBold);
turnTextItalicBtn.addEventListener('click', myTurnItalic);
clearTextBtn.addEventListener('click', myClearText);

