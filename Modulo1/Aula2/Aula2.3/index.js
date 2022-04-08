let Carro = {
    proprietario: "Fernanda",
    ano: 2016
}

const handler = {
    get(target, property, receiver) {
        console.log(`GET ${property}`);
        if(property in target){
            return target[property];
        }
        return "Propriedade inexistente"
        
    }
}

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.modelo);
console.log(carroProxy.modelo);

let tradutor = {
    'Carro': 'Car',
    'Ano'  : 'Year'
};

let handlerTradutor = {
    get(target, property){
        if(property in target){
            return target[property];
        } else { 
            return property;
        }
    },
    set(target, property, value){
      if(typeof value == 'string'){
          target[property] = value;
      } else {
          return false;
      }
    }
}
let tradutorProxy = new Proxy(tradutor,handlerTradutor);


console.log(tradutorProxy['Carro']);
console.log(tradutorProxy['Modelo']);

tradutorProxy["Modelo"] = "Model";
tradutorProxy["Marca"] = 4554541;


console.log(tradutorProxy['Modelo']);
console.log(tradutorProxy['Marca']);

