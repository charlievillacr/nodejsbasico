const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const q = [
    "Cuál es tu primer nombre? ",
    "Cuál es tu apellido? ",
    "Cuál es tu edad? "
];

const AskQuestion = (rl, question) => {
    return new Promise((resolve, rej)=>{
        rl.question(question, (answer) =>{
            resolve(answer);
        });
    });
}

const Ask = (questions) => {
    return new Promise(async (resolve) => {
        let resultados = [];
        for(let index=0; index < questions.length; index++){
            const result = await AskQuestion(rl, questions[index]);
            resultados.push(result);
        };
        rl.close();
        resolve(resultados);
    });
};

Ask(q)
 .then(q =>{
        console.log(`Hola ${q[0]} ${q[1]}, tu edad es la siguiente: ${q[2]} `);
    });