const countDisplayer = document.getElementById('count-displayer');
const addCountBtn = document.getElementById('add-count-btn');

function myAddCount() {
    countDisplayer.textContent = parseInt(countDisplayer.textContent) + 1;
}

addCountBtn.addEventListener('click', myAddCount);