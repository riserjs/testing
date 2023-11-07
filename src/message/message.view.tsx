import { View, Navigate, Parameter } from 'riser'
import { Button } from 'riser/interface'
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
				<Button label={ 'Go to user!' } onClick={ () => Navigate( '/user' ) }/>	
				<MessageComponent users={ { from: this.from, to: this.to }} />
  		</>
  	)
	}
}
