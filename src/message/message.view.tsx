import { View, Navigate, Parameter } from 'riser'
import { ButtonComponent } from '../button.component'
import { MessageComponent } from './message.component'

@View( '/message' )
export class MessageView {

	@Parameter()
	from: string

	@Parameter()
	to: string

	render( ) {
		return (
  		<>
				<ButtonComponent label={ 'Go to user!' } onClick={ () => Navigate( '/user' ) }/>	
				<MessageComponent users={ { from: this.from, to: this.to }} />
  		</>
  	)
	}
}
