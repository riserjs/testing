import { Component, State, Subscribe, Publish, Property } from 'riser'
import { Button, Input } from 'riser/interface'

@Component()
export class MessageComponent {

	@Property( )
	users: any

	input: any

	@State( )
	messages: any[] = [ ]

	onMount( ) {
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
		if ( this.input.value != '' ) {
			Publish( '/message/create', { ...this.users, message: this.input.value } )
			this.input.value = ''
		}
	}

	render( ) {
  	return (
  		<>
				<p class="m-4">{`Talking with ${this.users.to}`}</p>
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[250px] overflow-auto rounded">
					{ this.messages.map( ( m: any ) => ( <li>
						<div class={ m.from == this.users.from ? 'flex justify-start' : 'flex justify-end' }>{ m.message }</div>
					</li> ) )}
				</ul>
				<div class="flex m-4">
					<input
						placeholder={ `${this.users.from}, can write here..` }
						class="py-2 px-2 text-md border focus:outline-none rounded"
						onchange={ ( event: any ) => this.input = event.target }
					/>
					<button
						class="ml-4 w-20 flex items-center justify-center border rounded text-blue-dark"
						onclick={ this.onCreate }
					>Send
					</button>
				</div>
  		</>
  	)
	} 
}