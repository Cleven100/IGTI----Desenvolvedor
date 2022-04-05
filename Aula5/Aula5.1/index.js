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

