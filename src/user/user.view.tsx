import { View } from 'riser'
import { UserComponent } from './user.component'

@View( '/user' )
export class UserView {

	render( ) {
  	return (
  		<>
				<UserComponent/>
  		</>
  	)
	}
	
}