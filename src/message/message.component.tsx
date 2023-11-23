import { Component, State, Subscribe, Publish, Property } from 'riser'
import { Button, Input } from 'riser/interface'

@Component( )
export class MessageComponent {

	@Property( )
	users: any

	@State( )
	input: string = ''

	@State( )
	messages: string[] = []

	onMount( ) {
		Publish( '/message/readall', this.users )
	}

	@Subscribe( '/message/readall' )
	onReadAll( messages: string[] ) {
		this.messages = messages
	}

	@Subscribe( '/message/read' )
	onRead( message: string ) {
		//this.messages.shift( ) 
		//console.log(message, this.messages.length)
		if ( this.messages.length > 9 ) this.messages.shift( ) 
		this.messages.push( message )
	}

	onCreate( ) {
		if ( this.input == '' ) return
		Publish( '/message/create', { ...this.users, message: this.input } )
		this.input = ''
	}

	render( ) {
		return (
			<>
				<p class="m-4">{`Talking with ${ this.users.to }`}</p>
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[250px] overflow-auto rounded">
					{ this.messages.map( ( m: any ) => ( <li>
						<div class={ m.from == this.users.from ? 'flex justify-start' : 'flex justify-end' }>{ m.message }</div>
					</li> ) )}
				</ul>
				<div class="flex m-4">
					<Input placeholder={ `${ this.users.from }, can write here..` } value={ this.input }/>
					<Button label={ 'Send' } onClick={ this.onCreate }/>
				</div>
			</>
		)
	} 
}