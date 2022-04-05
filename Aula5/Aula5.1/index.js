import _ from 'lodash';



let cars = ['Palio', 'Uno', 'Gol', 'Saveiro', 'HB20', 'Creta'];


console.log(_.first(cars));
console.log(_.last(cars));

console.log(_.nth(cars,2));

console.log(_.nth(cars,-4))