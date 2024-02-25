const input = document.getElementById("name-input")
const title = document.getElementById("name-output")

input.addEventListener("input", handle)


function handle(event){
    let value = event.currentTarget.value
    console.log(value)

    if (value === "") {
        title.textContent = "Anonymous"
    } else (
        title.textContent = value
    )
}

