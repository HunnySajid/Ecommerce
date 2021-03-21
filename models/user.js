const mongoose = require('mongoose');
const { USER_ROLE } = require('../helpers/constants');

const UserSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		cellno: {
			type: String,
		},
		password: {
			type: String,
		},
		merchant: {
			type: Schema.Types.ObjectId,
			ref: 'Merchant',
			default: null,
		},
		avatar: {
			type: String,
		},
		role: {
			type: String,
			default: USER_ROLE[0],
			enum: USER_ROLE,
		},
		resetPasswordToken: { type: String },
		resetPasswordExpires: { type: Date },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', UserSchema);
