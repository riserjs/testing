import { Schema, Field } from 'riser/database'

@Schema( 'User' )
export class UserSchema { 

  @Field( { unique: true } )
  name: string
  
}
