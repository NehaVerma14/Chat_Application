auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in', user)
    }
})