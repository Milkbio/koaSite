const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	ctx.body = 'heihei';
});

module.exports = router;