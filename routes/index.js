const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	await ctx.render('index', {
		title: 'haa',
		body: 'hgagagag'
	})
});

module.exports = router;