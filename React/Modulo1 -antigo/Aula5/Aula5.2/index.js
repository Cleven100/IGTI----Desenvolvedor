import {format, addDays, formatDistance} from 'date-fns'
import { es, pt } from 'date-fns/locale/index.js'

let today = new Date();


console.log(today);

let todayFormatted = format(today, 'dd.MM.yyyy');
console.log(todayFormatted);

let todayFormatted2 = format(today, 'PPPP');
console.log(todayFormatted2);


let todayFormatted3 = format(today, 'PPPP', {locale: es});
console.log(todayFormatted3);

let todayFormatted4 = format(today, 'PPPP', {locale: pt});
console.log(todayFormatted4);



let todaySummed = addDays(today, 3);
let todaySummed2 = addDays(todaySummed, 5);

console.log(today);
console.log(todaySummed);
console.log(todaySummed2);

let endDate = new Date(2021, 12, 31);

let difBetweenDates = formatDistance(today, endDate, {locale: pt});
console.log(difBetweenDates);