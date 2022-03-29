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