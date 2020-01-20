const path = require('path');
const koa = require('koa');
const serve = require('koa-static');
const render = require('koa-ejs');
const chalk = require('chalk');

const app = new koa();

app.use(serve(path.resolve(__dirname + '/..')));

/*render(app, {
	root: path.join(__dirname, '/..'),
	layout: false,
	viewExt: 'html',
	cache: false,
	debug: true
});*/

const port = 3000;

app.listen(port);
console.log(chalk.green(`listening on port ${port}`));