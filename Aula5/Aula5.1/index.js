import _ from 'lodash';



let cars = ['Palio', 'Uno', 'Gol', 'Saveiro', 'HB20', 'Creta'];


console.log(_.first(cars));
console.log(_.last(cars));

console.log(_.nth(cars,2));

console.log(_.nth(cars,-4))


console.log(_.sample(cars));


console.log(_.shuffle(cars));

const arrayEmbaralhado = _.shuffle(cars);

console.log(arrayEmbaralhado);

console.log(_.random(10));

console.log(_.random(5,1000))

_.times(3, () => {
    console.log("repetição");
})


_.delay(() => {console.log("Atrasada")}, 1500)


let a = 1;
let b = 'carro';
let c = [1,2];
let d = {name: 'koaok'};

console.log(_.isNumber(a));
console.log(_.isString(b));
console.log(_.isArray(c));
console.log(_.isObject(d));


let numbers = [-4,-10,-2,0,1,2,3,5,6,8,10];
console.log(_.min(numbers));
console.log(_.max(numbers));

console.log(_.sum(numbers));


