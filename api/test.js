const { query } = require('koa/lib/request');

const Router = require('koa-router'),
    router = new Router();
router.get('/api/', (ctx, next) => {
    ctx.body = 'Hello World';
}).get('/api/test', (ctx, next) => {
    ctx.body = {
        msg: 'here is test',
        query: ctx.query,
        queryStr: ctx.querystring
    }
}).post('/api/users', (ctx, next) => {
    ctx.body = 'here is users';
}).all('/api/users/:id', (ctx, next) => {
    ctx.body = `here is users${ctx.params.id}`;
})

module.exports = router