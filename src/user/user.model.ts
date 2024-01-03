import { Schema, model, models } from 'mongoose'
import { Model } from 'riser'

export const User = models.user || model( 'user', new Schema( {
	name: { type: String, unique: true }
} ) )

@Model( )
class State {
	value: string
}


const x = new State
console.log(x.create())