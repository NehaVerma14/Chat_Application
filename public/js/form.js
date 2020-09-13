const registers = document.querySelector('#register')
registers.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = registers['email'].value;
    const password = registers['password'].value;
    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        registers.reset();
        window.location = '../index.html';
    })
})

