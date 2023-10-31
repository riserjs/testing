import { View, Navigate, Emitter } from 'quartzjs'
import { ButtonComponent } from '../button.component'
import { UserComponent } from './user.component'

@View( '/user' )
export class UserView {

	render( ) {
  	return (
  		<>
				<UserComponent />
  		</>
  	)
	}
}


