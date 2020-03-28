let login = prompt('State the login', 'login');
if (login === 'Admin') {
    let pass = prompt('State the password', 'password');
    for (let i = 3; i > 0; i--) {
        if (pass == 'The Master') {
            alert('Welcome')
            break
        } else if (pass == '' || null) {
            alert('Cancelled')
            break
        } else {
            alert(`Wrong password, you have ${i} tries left`)
        }
    } else if (login == '' || null) {
        alert('Cancelled');
    } else {
        'User unknown';
    }

