// npm i node-schedule serve é uma biblioteca de temporizador
const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob("*/5 * 10 * * 5", function() { // a cada 5s, qualquer minuto, 10 horas, qualquer dia, qualquer mes, sexta feira
    console.log("Executando Tarefa 1!", new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log("Cancelando tarefa 1!")
}, 20000)

// setImmediate =  é como se fosse o Timeout sem temporizador
// setInterval = já conheço, ele executa tarefas de tempos em tempos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.minute = 17
regra.second = 3

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})