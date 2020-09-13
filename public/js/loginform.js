

const login = document.querySelector('#login')
login.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = login['log-email'].value;
    const password = login['log-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        login.reset();
        window.location = '../join.html';
    })
})

