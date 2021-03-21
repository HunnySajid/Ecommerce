const mongoose = require('mongoose');

const MerchantSchema = mongoose.Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		name: {
			type: String,
			trim: true,
		},
		business: {
			type: String,
			trim: true,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		status: {
			type: String,
			default: 'Waiting Approval',
			enum: ['Waiting Approval', 'Rejected', 'Approved'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Merchant', MerchantSchema);
