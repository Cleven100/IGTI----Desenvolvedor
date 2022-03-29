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