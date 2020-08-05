'use strict';

let counterValue = 0;

const buildCounter = () => {
    let domString = `<div class="counter--card">
                        <h3>Counter</h3>
                        <div class="counter--value">${counterValue}</div>
                        <div class="counter--buttons">
                            <button id="decrease">Decrease</button>
                            <button id="reset">Reset</button>
                            <button id="increase">Increase</button>
                        </div>
                    </div>`

    printToDom('counterContainer', domString)
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}



const increaseCounter = () => {
    counterValue += 1;
    init();
}

const buttonEvent = () => {
    document.querySelector('#increase').addEventListener('click', increaseCounter);
}

const init = () => {
    buildCounter();
    buttonEvent();
}

init();