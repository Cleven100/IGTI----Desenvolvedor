import fs from "fs";

const teste = "Bla bla blu ble dlo"

fs.writeFile("teste.txt", teste, erro => {
   if(erro){
       console.log(erro)
   } else {
       console.log("arquivo com sucesso");
   }
})