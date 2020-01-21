const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	await ctx.render('index', {
		title: '首页'
	})
});

router.get('/canvas', async (ctx, next) => {
	await ctx.render('../views/canvas', {
		title: '首页'
	})
});

module.exports = router;