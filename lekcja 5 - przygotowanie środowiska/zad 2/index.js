const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const max = 10;
const min = 0;

const randomNum = () => {
    return Math.floor(Math.random() * (max - min) + min)
}
rl.question(`can you guess a number? ${randomNum() } :`, (answer) => {
    if (answer = randomNum()) {
        console.log("yo did IT !!!");

    } else {
        console.log('try again ;(');
    }
    rl.close();
});
