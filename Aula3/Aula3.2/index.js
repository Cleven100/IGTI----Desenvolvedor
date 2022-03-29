const p1 = new Promise((resolve) => resolve(console.log("Sempre será resolvida")));

Promise.resolve(console.log("Sempre será resolvida"));


Promise.reject(console.log("sempre será rejeitada"));

Promise.all([
    
    new Promise(resolve => setTimeout(resolve, 1200, "p1")),
    new Promise(resolve => setTimeout(resolve, 1200, "p2")),
    new Promise(resolve => setTimeout(resolve, 1200, "p3"))

]).then(results => results.data[0].name)
.then(name => console.info(name))
.catch(error => console.error(`exceção lançada na: ${error}`))


Promise.all([
     
      
    new Promise(resolve => setTimeout(() => resolve([]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([10]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([3,4]), 1200))

]).then(results => results.length)
.then(size => console.info(size))
.catch(erro => console.error(erro));





Promise.all([
     
      
    new Promise(resolve => setTimeout(() => resolve([]), 2800)),
    new Promise((resolve, reject) => setTimeout(() => reject([10]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([3,4]), 800))

]).then(results => results.length)
.then(size => console.info(size))
.catch(erro => console.error(erro));



const p5 = Promise.race([
    new Promise(resolve => setTimeout(resolve, 3000, "p10")),
    new Promise((resolve, reject) => setTimeout(reject, 2000, "p20")),
    new Promise(resolve => setTimeout(resolve, 4000, "P13"))
])

p5.then(result => console.log(result));
p5.catch(error => console.error(error));


function getCarInfo(car) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`Car details: ${car}`), Math.floor(600*Math.random()))
    })
}

function showStatus() {
    console.log("Aguarde dados sendo carregados...");
}

function timeout(delay, result) {
      return new Promise(resolve =>{
          setTimeout(() => {
              resolve(result)
          }, delay);
      });
}

function showCarInfo(car) {
    return getCarInfo(car).then(info =>{
        console.log(`Car info: ${car}`)
        return true;
    })
}


Promise.race([showCarInfo("Palio"), timeout(300)])
.then(displayed => {
       if(!displayed) {
           showStatus()
       } else {

       }
})




