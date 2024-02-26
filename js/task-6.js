function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
const boxes = document.getElementById("boxes")

createBtn.addEventListener("click", createBox)

function createBox(event) {
    let amount = input.value
    if (isNaN(amount) || amount < 1 || amount > 100) {
        console.log('Invalid input. Please enter a number between 1 and 100.');
        return
    }

    deleteBox()


    let size = 30;
    for (let i = 0; i < amount; i++){
        let box = document.createElement("div")
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box);
        size += 10;
    }
}

destroyBtn.addEventListener("click", deleteBox)

function deleteBox(event) {
    boxes.innerHTML = ""
}
