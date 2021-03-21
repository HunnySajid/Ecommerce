const mongoose = require('mongoose');
const { CART_ITEM_STATUS } = require('../helpers/constants');

const CartItemSchema = mongoose.Schema({
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
	},
	quantity: Number,
	totalPrice: {
		type: Number,
	},
	priceWithTax: {
		type: Number,
		default: 0,
	},
	status: {
		type: String,
		default: CART_ITEM_STATUS[0],
		enum: CART_ITEM_STATUS,
	},
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

const CartSchema = mongoose.Schema(
	{
		products: [CartItemSchema],
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

const Cart = mongoose.model('Cart', CartSchema);
module.exports = { CartItem, Cart };
