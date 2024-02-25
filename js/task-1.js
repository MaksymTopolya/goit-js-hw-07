const list = document.getElementById("categories");

const items = document.querySelectorAll(".item")

console.log(`Number of categories: ${items.length}`)

items.forEach((elem) => {
    const title = elem.querySelector("h2").textContent;
    const list = elem.querySelectorAll("li").length;
    console.log(`Category: ${title}`)
    console.log(`Elements: ${list}`)
})