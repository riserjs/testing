import { Component, Publish, Navigate, Subscribe, State, Client } from 'riser'
import { Button, Input } from 'riser/interface'

@Component()
export class UserComponent {

	@State( )
	label: string = '12312'

	from: string = ''

	@State()
	users: string[] = []

	@State()
	pass: boolean = false

	onRegister( ) {
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
		//console.log(this.label,this.label.q)
		//setInterval( ()=>{this.label ='123'; console.log(this.label.q)}, 10000)

		return (
  		<>
				<Button label={ this.label } onClick={ () => Navigate( '/' ) }/>
				{ this.pass == false ?
				<div class="flex m-4">
					<input
						placeholder="What's your name?"
						class="py-2 px-2 text-md border focus:outline-none rounded"
						onchange={ ( e: any ) => this.from = e.target.value }
					/>
					<Button label={ this.label } onClick={ this.onRegister }/>
				</div> :
				<ul class="m-4 mt-0 list-none list-inside text-blue-dark border w-[363px] h-[220px] overflow-auto rounded">
					{ this.users.map( ( u: any ) => <li class="h-[33px] border" onClick={ () => Navigate( `/message?from=${ this.from }&to=${ u.name }` )}>{ u.name }</li> ) }
				</ul> }
  		</>
  	)
	}
}
