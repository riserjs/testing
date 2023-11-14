import { Component, Publish, Navigate, Subscribe, State, Client } from 'riser'
import { Button, Input } from 'riser/interface'
@Component( )
export class UserComponent {

	@State( )
	input: string = ''

	@State( )
	users: string[] = []

	@State( )
	pass: boolean = false

	onRegister( ) {
		if ( this.input == '' ) return
		Publish( '/user/create', this.input )
	}

	@Subscribe( '/user/read' )
	getList( users: any ) {
		this.pass = true
		this.users = users
		Client( this.input )
	}

	render( ) {
		return (
  		<>
				<div class="flex m-4">
					<Input placeholder={ 'Write your name!' } value={ this.input }/>
					<Button label={ 'Register' } onClick={ this.onRegister }/>
				</div>
				{ this.pass == false ? <></> :
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[220px] overflow-auto rounded">
					{ this.users.map( ( u: any ) => <li class="h-[33px] border" onClick={ () => Navigate( `/message?from=${ this.input }&to=${ u.name }` )}>{ u.name }</li> ) }
				</ul> }
  		</>
  	)
	}
}
