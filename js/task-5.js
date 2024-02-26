function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color")

const paragraf = document.querySelector(".color")

btn.addEventListener("click", handle)

function handle(event) {
    const random = getRandomHexColor();
    paragraf.textContent = random;
    document.body.style.backgroundColor = random;
}