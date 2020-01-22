const path = require('path');
const koa = require('koa');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const logger = require('koa-logger');
const koastatic = require('koa-static');
const chalk = require('chalk');
const views = require('koa-views');
const router = require('../routes/');
const webpackConfig = require('./webpack.conf');

const compiler = webpack(webpackConfig);

const wdm = webpackDevMiddleware(compiler, {
	noInfo: true,
	//publicPath: config.output.publicPath
})

const app = new koa();
app.use(wdm)
app.use(webpackHotMiddleware(compiler))
app.use(logger());

// 静态资源文件
app.use(koastatic(path.resolve(__dirname + '/..')));

// 设置模板
app.use(views(__dirname + '/../views', {
	extension: 'ejs'
}));


app.use(router.routes());

const port = 3000;

app.listen(port);
console.log(chalk.green(`listening on port ${port}`));
