import { Schema, Field } from 'riser/database'

@Schema( 'Message' )
export class MessageSchema { 

  @Field( )
  from: string

	@Field( )
  to: string
  
	@Field( )
	users: Array < string >

	@Field( )
	message: string

	@Field( { default: Date.now } )
	timestamp: Date

}