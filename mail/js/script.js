const mailAddress = ['gioele.miscia@gmail.com', 'raffa.mancano@gmail.com', 'gioele.miscia@yahoo.it', 'let_vs_oni@hotmail.it']

const btnControlla = document.getElementById('controlla');

let validMail = false;

btnControlla.addEventListener('click', function () {
    let userMail = document.getElementById('userMail').value.toLowerCase();
    for (let i = 0; i < mailAddress.length; i++) {
        if (mailAddress[i].toLowerCase() === userMail) {
            validMail = true;
        }
    }

    if (validMail === true) {
        document.getElementById('validazione').innerHTML = '<h3>Complimenti, la tua mail è valida!</h3>'
    }else {
        document.getElementById('validazione').innerHTML = '<h3>Mi dispiace, la tua mail non è valida!</h3>'
    }
})