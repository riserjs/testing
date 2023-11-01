import { View, Navigate, Emitter } from 'riser'
import { ButtonComponent } from './button.component'
import Logo from './assets/logo.png'
import { InputComponent } from './input.component'

@View( '/' )
export class HomeView {

	width = 100

	render( ) {
  	return (
  		<>
				<ButtonComponent label={ 'Go to user!' } onClick={ () => Navigate( '/user' ) }/>
				<ButtonComponent label={ 'Request check if is exposed!' } onClick={ () => Emitter( '/user/create', { a: 1, b: '', boolean: true } ) }/>
				<img src={ Logo } width={ this.width } />
				<InputComponent />
  		</>
  	)
	}
}