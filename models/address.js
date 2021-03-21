const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		fullName: {
			type: String,
		},
		cityName: {
			type: String,
		},
		stateName: {
			type: String,
		},
		address: {
			type: String,
		},
		pinCode: {
			type: String,
		},
		landMark: {
			type: String,
		},
		isDefault: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Address', AddressSchema);
