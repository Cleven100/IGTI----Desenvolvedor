function IMC() {

   let altura = 1.80;

   function calcula() {
       let peso = 70;
       console.log("IMC: " + peso/(altura*altura))
   }

  return calcula;


}

let imc = IMC();
imc();


function Carro() {
    this.proprietario = "Marcos";
    let ano = 2020;


    this.getAno = function() {
         return ano;
    }

    this.setAno = function(ano) {
        this.ano = ano;
    }
}

let carro = new Carro();

console.log(carro.proprietario);
console.log(carro.ano);
console.log(carro.getAno());