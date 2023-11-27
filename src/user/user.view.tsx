import { View, Navigate, Observable } from 'riser'
import { UserComponent } from './user.component'
import { Button } from 'riser/interface'

@View( '/user' )
export class UserView {

	@Observable( )
	myobserver: any

	onMount( ) {
		this.myobserver.subscribe( v => console.log( v ) )
	}

	render( ) {
  	return (
  		<>
				<Button label={ 'Go to home!' } onClick={ () => Navigate( '/' ) }/>
				<UserComponent/>
  		</>
  	)
	}
	
}