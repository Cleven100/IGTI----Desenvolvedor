if(true) {
    var v = "Aula"
}

if(true) {
    let x = "Aula"
}

console.log(v);



const PI = 3.141595;

console.log(PI);


const Aluno = {
    nome: "Bruno",
    sobrenome: "Teixeira"
}

console.log(Aluno.nome);


Aluno.nome = "Carlos";

console.log(Aluno.nome);



var some = function(a, b) {
    return a + b;
}

function soma2(a,b) {
    return a + b;
}


let soma3 = (a, b) =>{
    return a + b
}

let soma4 = (a,b) => a + b;


let log = () => {console.log("Erro"); }


const Aluno2 = {
    nome: "ana",
    getAluno: function () {return console.log(this)}
}

Aluno2.getAluno();

const Aluno3 = {
    nome: "Anan",
    getAluno: () => {return console.log(Aluno3.nome)}
}

Aluno3.getAluno();

/* function Carro(marca){
    this.marca = marca;
}

Carro.prototype.getMarca = function a () {
};

class Carro {
      constructor(marca){
          this.marca = marca
      }

    getMarca () {
        
        return this.marca;
    }
}

class Veiculo{
    constructor (marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, estepe) {
        super(marca, modelo);
        this.estepe = estepe;
    }
    getInfo() {
        return console.log( "Marca: " + super.getMarca() + ",  Modelo: ", super.getModelo()); 
        
    }
} */




var nome = "Maria";
var idade = 19
var curso = "computacao";

var frase = `${nome} tem ${idade} e faz o ${curso} `;

console.log(frase);



var carros = ["uno", "gold"];

var car1 = carros[0];
var car2 = carros[1];

//ES6

let [a,b] = ["uno", "gol", "onix"]

console.log(a);
console.log(b);

[a, b] = [b,a];

console.log(a);
console.log(b);

const c1 = {modelo: "Onix", ano: 2019}

const{modelo, ano} = c1;

console.log(modelo);
console.log(ano);


const printCarInfo = ({modelo, ano}) => console.log(`Modelo: ${modelo}, ano: ${ano}`);


printCarInfo(c1);


var soma6 = function (a,b){
    if(a === undefined) a = 1;
    if(b === undefined) b = 1;
    return a+b;
}



let soma7 = (a = 1, b = 1) =>  a + b;