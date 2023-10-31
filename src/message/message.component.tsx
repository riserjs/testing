import { Component, State, Receptor, Emitter, Initiate, Property } from 'quartzjs'

@Component()
export class MessageComponent {

	@Property( )
	users: any

	@State()
	messages: any[] = [ ]

	@State( )
	style = ''

	@Initiate( )
	readAll( ) {
		Emitter( '/message/readall', this.users )
	}

	@Receptor( '/message/readall' )
	onReadAll( messages: any ) {
		this.messages.unshift( ...messages )
	}

	@Receptor( '/message/read' )
	onRead( message: any ) {
		this.messages.shift() 
		this.messages.push( message )
	}

	onCreate( ) {
		if ( this.input && this.input != '' ) {
			Emitter( '/message/create', { ...this.users, message: this.input } )
			this.input = ''
		}
	}

	input: String

	render( ) {
  	return (
  		<>
				<div class="m-4">{`Talking with ${this.users.to}`}</div>
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[250px] overflow-auto rounded">
					{ this.messages && this.messages.map( ( m: any ) => ( <li>
						<div class={ m.from == this.users.from ? 'flex justify-start' : 'flex justify-end' }>{ m.message }</div>
					</li> ) )}
				</ul>
				<div class="flex m-4">
					<input
						type="text"
						placeholder={`${this.users.from}, can write here..`}
						class="py-2 px-2 text-md border focus:outline-none rounded"
						onKeyUp={ ( e: any ) => this.input = e.target.value }
					/>
					<button
						class="ml-4 w-20 flex items-center justify-center border rounded text-blue-dark"
						onClick={this.onCreate}
					>Send
					</button>
				</div>
  		</>
  	)
	} 
}