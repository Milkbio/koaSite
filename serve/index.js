const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const static = require('koa-static');
const chalk = require('chalk');
const view = require('koa-view');
const router = require('../routes/')

const app = new koa();
app.use(logger());
// 静态资源文件
app.use(static(path.resolve(__dirname + '/..')));

app.use(view(__dirname + '/../views', {
	map: {
		html: 'ejs'
	}
}));

app.use(router.routes());

const port = 3000;

app.listen(port);
console.log(chalk.green(`listening on port ${port}`));