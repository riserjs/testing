import { Component, State, Receptor, Emitter, Initiate, Property } from 'riser'

@Component()
export class MessageComponent {

	@Property( )
	users: any

	input: any

	@State()
	messages: any[] = [ ]

	@Initiate( )
	readAll( ) {
		Emitter( '/message/readall', this.users )
	}

	@Receptor( '/message/readall' )
	onReadAll( messages: any ) {
		this.messages = messages.reverse( )
	}

	@Receptor( '/message/read' )
	onRead( message: any ) {
		if ( this.messages.length > 9 ) this.messages.shift() 
		this.messages.push( message )
	}

	onCreate( ) {
		if ( this.input.value != '' ) {
			Emitter( '/message/create', { ...this.users, message: this.input.value } )
			this.input.value = ''
		}
	}

	render( ) {
  	return (
  		<>
				<div class="m-4">{`Talking with ${this.users.to}`}</div>
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[250px] overflow-auto rounded">
					{ this.messages.map( ( m: any ) => ( <li>
						<div class={ m.from == this.users.from ? 'flex justify-start' : 'flex justify-end' }>{ m.message }</div>
					</li> ) )}
				</ul>
				<div class="flex m-4">
					<input
						type="text"
						placeholder={`${this.users.from}, can write here..`}
						class="py-2 px-2 text-md border focus:outline-none rounded"
						onKeyUp={ ( { target }: any ) => { this.input = target } }
					/>
					<button
						class="ml-4 w-20 flex items-center justify-center border rounded text-blue-dark"
						onClick={ this.onCreate }
					>Send
					</button>
				</div>
  		</>
  	)
	} 
}