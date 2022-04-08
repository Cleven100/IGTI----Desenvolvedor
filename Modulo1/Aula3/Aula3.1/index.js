const p1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('sucesso P1'), 2000)
})

p1.then((res) => {console.log(res)}, (rej) => {});



new Promise((resolve,reject) =>{
    setTimeout(() => resolve('sucesso P1'), 2000)
}).then((res) => {console.log(res)}, (resj) => {});



const p2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('sucesso P2'), 2000)
})

p2.then((res) => {console.log(res)});
p2.catch((rej) => {});

p2.then((res) => {console.log(res)}).catch((rej) => {})



const p3 = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) { 
        resolve("Sucesso P3");
    }  else {
        reject("FALHA P3");
    }
})
p3.then(console.log).catch(console.error);




const p4 = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) { 
        resolve("Sucesso P4");
    } else {
        reject("FALHA P4");
    }
})

p4.then( function acao1 (res) {console.log(`${res} da ação 1`); return res})
.then( function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then( function acao3 (res) {console.log(`${res} da ação 3`); return res})
.catch(function erro(rej) {console.error(rej)});


const p5 = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) { 
        resolve("Sucesso P5");
    } else {
        reject("FALHA P5");
    }
})


p5.then( function acao1 (res) {console.log(`${res} da ação 1`); return res})
.catch(function erro1 (rej) {console.error('erro no primeiro catch'); return rej})
.then( function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then( function acao3 (res) {console.log(`${res} da ação 3`); return res})
.catch(function erro(rej) {console.error(rej)});


const p6 = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) { 
        resolve("Sucesso P6");
    } else {
        reject("FALHA P6");
    }
})

p6.catch( function erro1(rej) {console.error("Erro no primeiro catch P6"); return})
p6.catch( function erro2 (rej) {console.error(rej)})
p6.then( function acao1 (res) {console.log(`${res} da ação 1`); return res})
.then( function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then( function acao3 (res) {console.log(`${res} da ação 3`); return res})



const p7 = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) { 
        resolve("Sucesso P7");
    } else {
        reject("FALHA P7");
    }
})

p7.catch( function erro1(rej) {console.error("Erro no primeiro catch P7"); return})

p7.then(function acao1(res) {console.log('Promesssa Rejeitada na ação1'); throw new Error('Erro'); })
.catch(function erro2(rej) {console.error('Tratamento das rejeições em P7')})
.then(function acao2(red) {console.log(`${res} da ação 3`); return red})
.catch(function erro3(rej) {console.log('Tratamento das rejeições em acao2 e acao3')});


