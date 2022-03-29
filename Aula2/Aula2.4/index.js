//PROXY COM REFLECT
let tradutor = {
    'Carro': 'Car',
    'Ano'  : 'Year'
};

let handlerTradutor = {
    get(target, property){
        if(property in target){
            return Reflect.get(target, property)
        } else { 
            return property;
        }
    },
    set(target, property, value){
      if(typeof value == 'string'){
         return Reflect.set(target,property,value);
      } else {
          return false;
      }
    }
};

tradutor = new Proxy(tradutor, handlerTradutor);


console.log(tradutor['Carro']);
console.log(tradutor['Modelo']);

tradutor["Modelo"] = "Model";
tradutor["Marca"] = 4554541;


console.log(tradutor['Modelo']);
console.log(tradutor['Marca']);