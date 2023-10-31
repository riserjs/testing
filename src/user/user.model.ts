import { Schema, model } from 'mongoose'

export const User = model( 'user', new Schema( {
	name: { type: String, unique: true }
} ) )