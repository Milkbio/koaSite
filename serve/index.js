const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const static = require('koa-static');
const chalk = require('chalk');
const views = require('koa-views');
const router = require('../routes/')

const app = new koa();
app.use(logger());
// 静态资源文件
app.use(static(path.resolve(__dirname + '/..')));

app.use(views(__dirname + '/../views', {
	extension: 'ejs'
}));

app.use(async (ctx, next) => {
	await ctx.render('index', {
		title: 'hahaha',
		body: 'emmm'
	})
})

// app.use(router.routes());

const port = 3000;

app.listen(port);
console.log(chalk.green(`listening on port ${port}`));