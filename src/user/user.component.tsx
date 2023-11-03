import { Component, Emitter, Navigate, Receptor, State, Client } from 'riser'
import { ButtonComponent } from '../button.component'

@Component()
export class UserComponent {

	from: string = ''

	@State()
	users: string[] = []

	@State()
	pass: boolean = false

	register( ) {
		if ( this.from == '' ) return
		Emitter( '/user/create', this.from )
	}

	@Receptor( '/user/read' )
	getList( users: any ) {
		this.pass = true
		this.users = users
		Client( this.from )
	}

	render( ) {
		return (
  		<>
				<ButtonComponent label={ 'Go to home!' } onClick={ () => Navigate( '/' ) }/>
				{ this.pass == false ?
				<div class="flex m-4">
					<input
						type="text"
						placeholder="What's your name?"
						class="py-2 px-2 text-md border focus:outline-none rounded"
						onKeyUp={ ( e: any ) => this.from = e.target.value }
					/>
					<button
						class="ml-4 w-20 flex items-center justify-center border rounded text-blue-dark"
						onClick={ this.register }
					>Register
					</button>
				</div> :
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[220px] overflow-auto rounded">
					{ this.users.map( ( u: any ) => <li class="h-[33px] border" onClick={ () => Navigate( `/message?from=${ this.from }&to=${ u.name }` )}>{ u.name }</li> ) }
				</ul> }
  		</>
  	)
	}
}
