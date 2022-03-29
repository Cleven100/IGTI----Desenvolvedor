function log(date,type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}

log(new Date(), "DEBUG", "Exemplo de currying");


const logCurrying = date => type => message => {console.log(console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`))};


logCurrying(new Date())("DEBUG")("Exemplo de currying");


let logNow = logCurrying(new Date());

logNow("DEBUG")("Exemplo de currying fixo");

