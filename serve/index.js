const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const chalk = require('chalk');
const views = require('koa-view');
const router = require('koa-router')();

const app = new koa();
app.use(logger());
// 静态资源文件
app.use(serve(path.resolve(__dirname + '/..')));


app.use(views(__dirname + '/../views', {
	extension: 'ejs'
}));

router.get('/', async (ctx, next) => {
	ctx.render('index')
});

app.use(router.routes());

const port = 3000;

app.listen(port);
console.log(chalk.green(`listening on port ${port}`));