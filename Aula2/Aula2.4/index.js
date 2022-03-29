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