import { Schema, model, models } from 'mongoose'

export const User = models.user || model( 'user', new Schema( {
	name: { type: String, unique: true }
} ) )
