import { Component, State, Subscribe, Publish, Initiate, Property } from 'riser'
import { Button, Input } from 'riser/interface'

@Component()
export class MessageComponent {

	@Property( )
	users: any

	value: string= '2'

	@State()
	messages: any[] = [ ]

	@Initiate( )
	readAll( ) {
		Publish( '/message/readall', this.users )
	}

	@Subscribe( '/message/readall' )
	onReadAll( messages: any ) {
		this.messages = messages
	}

	@Subscribe( '/message/read' )
	onRead( message: any ) {
		if ( this.messages.length > 9 ) this.messages.shift() 
		this.messages.push( message )
	}

	onCreate( ) {
		if ( this.value != '' ) {
			Publish( '/message/create', { ...this.users, message: this.value } )
			this.value = ''
		}
	}

	render( ) {
  	return (
  		<>
				<div class="m-4" attr={1}>{`Talking with ${this.users.to}`}</div>
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[250px] overflow-auto rounded">
					{ this.messages.map( ( m: any ) => ( <li>
						<div class={ m.from == this.users.from ? 'flex justify-start' : 'flex justify-end' }>{ m.message }</div>
					</li> ) )}
				</ul>
				<div class="flex m-4">
					<Input placeholder={ `${this.users.from}, can write here..` } value={ this.value }/>
					<Button label={ 'Send' } onClick={ this.onCreate }/>
				</div>
  		</>
  	)
	} 
}