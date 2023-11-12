import { View, Navigate } from 'riser'
import { UserComponent } from './user.component'
import { Button } from 'riser/interface'

@View( '/user' )
export class UserView {

	render( ) {
  	return (
  		<>
				<Button label={ 'Go to home!' } onClick={ () => Navigate( '/' ) }/>
				<UserComponent/>
  		</>
  	)
	}
	
}