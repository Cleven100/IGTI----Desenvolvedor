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
