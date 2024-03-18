function darkMode() {
    document.body.classList.toggle('dark');

}

function formHandle() {
    document.querySelector('#contactForm')

    event.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value

    const data = {
        'name': name,
        'email': email,
        'message': message
    }

    const json = JSON.stringify(data)
    console.log(json)
}
