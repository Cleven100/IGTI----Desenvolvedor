import eventEmitter from "./events.js";

eventEmitter.on("testEvent", () => {
    console.log("Ouviu também");
})


eventEmitter.emit("testEvent", "blabasdasadasda");