import { View, Navigate } from 'riser'
import { HomeComponent } from './home.component'
import { Button } from 'riser/interface'

import Logo from '../assets/logo.png'
@View( '/' )
export class HomeView {

	width = 100

	render( ) {
  	return (
  		<>
				<Button label={'Go to user!'} onClick={ () => Navigate( '/user' ) }/>
				<img src={ Logo } width={ this.width } />
				<HomeComponent />
  		</>
  	)
	}
}