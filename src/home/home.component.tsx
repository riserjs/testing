import { Component, State } from 'riser'
import { Button } from 'riser/interface'

@Component( )
export class HomeComponent {

	@State( )
	name: String = 'xd'

	@State( )
	arr: number[] = [ ]

	@State( )
	obj: any = { a: undefined, b: 200 }

	@State( )
	pass: boolean = false

	update( ) {
		this.arr = [ 1, 2, 3 ]
		this.pass = true
		this.name = 'XD'
		this.obj.a = 100
	}

	render( ) {
		return (
			<>
				<Button label={ 'Update elements' } onClick={ this.update }/>				
				<div none={ this.name }>{ this.name }</div>
				<div none={ this.name }>{ this.name }</div>
				<>{ `${this.name}` }</>
				{ this.arr.map( ( e: number ) => <>{ e }</> ) }
				{ this.name }
				{ this.pass ? <>YES</> : <>NOT</> }
				{ this.obj.a || this.obj.b }
				<>a</>
				{ [ 'b', 'c' ].map( ( e: string ) => <>{ e }</> ) }
				{ this.arr.map( ( e: number ) => <>{ e }</> ) }
			</>
  	)
	}
}