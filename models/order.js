const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
	{
		cart: {
			type: Schema.Types.ObjectId,
			ref: 'Cart',
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		total: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Order', OrderSchema);
