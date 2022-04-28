import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pergunta();

function pergunta() {
    rl.question("Digite um número: ", numero => {
    const multiplos = [];
    for(let i = 3; i <= parseInt(numero); i++){
         if((i % 7 == 0) && (i % 11 === 0) && (i % 19 === 0) && (i % 31 === 0)){
             multiplos.push(i);
         }
    }
     console.log(multiplos);

    rl.question("Digite 0 para sair e digite 1 para continuar: ", resposta => {
         if(resposta === "0"){
        rl.close()
    } else {
        pergunta();
    }
    
    });

   
    
})
}

