module.exports = {
	app: {
		name: 'Ecommerce Social Platform',
	},
	port: process.env.PORT || 5000,
	database: {
		url: process.env.MONGO_URI,
	},
	jwt: {
		secret: process.env.JWT_SECRET,
		tokenLife: '7d',
	},
};
