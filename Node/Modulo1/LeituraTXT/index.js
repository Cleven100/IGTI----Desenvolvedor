 import {promises as fs} from "fs";

teste();

 async function teste() {
    try {
       await fs.writeFile("teste.txt", "14,20,30,50");
          await     fs.appendFile("teste.txt", "\n13, 15, 45");
            const data = await  fs.readFile("teste.txt", "utf-8")
                    console.log(data);
    } catch (error) {
        console.log(error)
    }
}





 /*fs.writeFile("teste.txt", "14,20,30,50").then(() => {
   fs.appendFile("teste.txt", "\n13, 15, 45").then(() =>{
     fs.readFile("teste.txt", "utf-8").then(response =>{
       console.log(response);
     }).catch(error => {
         console.log(error)
     })
   }).catch(error => {
       console.log(error)
   })
 }).catch(error =>{
     console.log(error);
 })*/
 
 
 
 
 
 
 /*import fs from "fs";

const teste = " 15 16 17 20"
const novo =  " 25 16 18 32"

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
   

    let novoValor = dados.replace("", ",");
   // let inteiros = JSON.parse("["+dados+"]");
    
    //let valorMaior = inteiros.filter((dado) => dado >= 18).sort();
   console.log(novoValor);
}
*/



