function Pessoa(name) {
    if(!name) this.name = "fulano";
    else this.name = name;

    this.dizerOla = function() {
        console.log(this.name + " diz: olá!")
    }
 
}

let pessoaA = new Pessoa("Alberto");

Pessoa.digaOla = () => console.log("Olá, meu nome é: " + this.name);

let pessoaB = new Pessoa("Maria");

console.log("------------------------------------\n");
try {
     a.digaOla();
} catch (error) {
    console.log(error);
}

try {
     b.digaOla();
} catch (error) {
    console.log(error);
}
console.log("------------------------------------\n");

pessoaB.digaOla = () => console.log("Olá, meu nome é: " + pessoaB.name)



try {
    pessoaB.digaOla();
} catch (error) {
   console.log(error);
}