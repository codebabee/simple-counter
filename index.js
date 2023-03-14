

let count = 0;

let displayCount = document.getElementById("count")

let incrementElement = document.getElementById("increment");
let decrementElement = document.getElementById("decrement");
let resetElement = document.getElementById("reset");

function increment() {
    count++;
    displayCount.textContent = count;
}
function decrement() {
    if (count > 0) {
        count--;
    }
    displayCount.textContent = count;
}
function reset() {
    count = 0;
    displayCount.textContent = count;
}

incrementElement.addEventListener("click", increment);
decrementElement.addEventListener("click", decrement);
resetElement.addEventListener("click", reset);
