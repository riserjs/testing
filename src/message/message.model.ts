import { Schema, model, models } from 'mongoose'

export const Message = models.message || model( 'message', new Schema( {
	from: String,
	to: String,
	users: [ String ],
	message: String,
	timestamp: { type: Date, default: Date.now },
} ) )

