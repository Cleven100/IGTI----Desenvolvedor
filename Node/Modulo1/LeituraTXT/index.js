import fs from "fs";

const teste = "15, 16, 17, 20"
const novo = ", 25, 16, 18, 32"

fs.writeFile("teste.txt", teste, erro => {
   if(erro){
       console.log(erro)
   } else {
       
      fs.appendFile("teste.txt", novo, erro => {
          if(erro)
          {
              console.log(erro)
          } else {
               fs.readFile("teste.txt", "utf-8", (erro, data) => {
           if(erro){
               console.log(erro)
           } else {
               const dados = data;
               imprimir(dados);
           }
       })
          }
      })
     

      
   }
})

const imprimir = (dados) => {
    let inteiros = JSON.parse("["+dados+"]");
    let valorMaior = inteiros.filter((dado) => dado >= 18).sort();
   console.log(valorMaior);
}


