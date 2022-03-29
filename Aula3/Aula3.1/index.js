const p1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('sucesso'), 2000)
})

p1.then((res) => {console.log(res)}, (rej) => {});



new Promise((resolve,reject) =>{
    setTimeout(() => resolve('sucesso'), 2000)
}).then((res) => {console.log(res)}, (resj) => {});
