const numb = []

for (let i = 1; i <= 2; i++) {
    numb.push(Math.floor(Math.random() * 6 + 1))
}

console.log(numb)

if (numb[0] > numb[1]) {
    console.log('Giocatore WIN')
}else if (numb[0] < numb[1]) {
    console.log('Computer WIN')
}else {
    console.log('Parità')
}