const form = document.querySelector(".login-form")

form.addEventListener("submit", handle)

function handle(event) {
    event.preventDefault();

    let email = event.currentTarget.elements.email.value
    let pass = event.currentTarget.elements.password.value
    
    if (email === "" || pass === "") {
        alert('All form fields must be filled in')
        return
    }

    let obj = {
        email: email,
        password: pass,
    }
    
    console.log(obj)
}
