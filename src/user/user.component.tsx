import { Component, Publish, Navigate, Subscribe, State, Client } from 'riser'
import { Button, Input } from 'riser/interface'

@Component()
export class UserComponent {

	from: string = 'x'

	@State()
	users: string[] = []

	@State()
	pass: boolean = false

	click( ) {
		if ( this.from == '' ) return
		Publish( '/user/create', this.from )
	}

	@Subscribe( '/user/read' )
	getList( users: any ) {
		this.pass = true
		this.users = users
		Client( this.from )
	}

	render( ) {
		setInterval( ()=>console.log(this.from),2000)
		return (
  		<>
				<Button label={ 'Go to home!' } onClick={ () => Navigate( '/' ) }/>
				{ this.pass == false ?
				<div class="flex m-4">
					<Input placeholder={ "What's your name?" } value={this.from}/>
					<Button label={ 'Register' } onClick={ this.click }/>
				</div> :
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[220px] overflow-auto rounded">
					{ this.users.map( ( u: any ) => <li class="h-[33px] border" onClick={ () => Navigate( `/message?from=${ this.from }&to=${ u.name }` )}>{ u.name }</li> ) }
				</ul> }
  		</>
  	)
	}
}
