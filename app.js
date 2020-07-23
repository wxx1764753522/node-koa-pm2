const Koa = require('koa'),
    app = new Koa(),
    router = require('./api/test');


app.use(async (ctx, next) => {
    const start = Date.now();

    await next();

    const ms = Date.now() - start;

    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})
console.log(1)
app.use(router.routes())
app.listen(3000)