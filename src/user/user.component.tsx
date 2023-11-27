import { Component, Publish, Navigate, Subscribe, State, Client, Observable, Inject } from 'riser'
import { Button, Input } from 'riser/interface'
import { UserStorage } from './user.storage'

@Component( )
export class UserComponent {

	@Inject( )
	storage: UserStorage

	@Observable( )
	myobserver: any

	onMount( ) {
		this.myobserver.publish( 'caca' )
	}

	user: string = ''

	@State( )
	input: string = ''

	@State( )
	users: string[] = []

	onRegister( ) {
		if ( this.input == '' ) return
		Publish( '/user/create', this.input )
		this.user = this.input
		this.input = ''
	}

	@Subscribe( '/user/read' )
	getList( users: any ) {
		this.users = users
	}

	render( ) {
		return (
  		<>
				<div class="flex m-4">
					<Input placeholder={ 'Write your name!' } value={ this.input }/>
					<Button label={ 'Register' } onClick={ this.onRegister }/>
				</div>
				{ this.users.length == 0 ? <></> :
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[220px] overflow-auto rounded">
					{ this.users.map( ( u: any ) => <li class="h-[33px] border" onClick={ () => { Client( this.user ); Navigate( `/message?from=${ this.user }&to=${ u.name }` ) } }>{ u.name }</li> ) }
				</ul> }
  		</>
  	)
	}

}
