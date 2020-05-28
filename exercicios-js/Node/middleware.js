// middleware pattern ou chain of responsability
const passo1 = (ctx, next) => { // ctx é o contexto, é o que vai transportar, carrega os dados de um passo para o outro. Já o next é o que vai chamar o próximo passo
    ctx.valor1 = "mid1"
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"
    next()
}

const passo3 = ctx => ctx.valor3 = "mid3"

const exec = (ctx, ...middlewares) => {
    const execPasso = i => {
        middlewares && i < middlewares.length && 
            middlewares[i](ctx, () => execPasso(i + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo2, passo1, passo3)
console.log(ctx)