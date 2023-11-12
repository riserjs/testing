import { View, Navigate } from 'riser'
import Logo from '../assets/logo.png'
import { HomeComponent } from './home.component'
import { Button } from 'riser/interface'

@View( '/' )
export class HomeView {

	width = 100

	render( ) {
  	return (
  		<>
				<Button label={'Go to user!'} onclick={ () => Navigate( '/user' ) }/>
				<img src={ Logo } width={ this.width } />
				<HomeComponent />
  		</>
  	)
	}
}