import { Component, State } from 'riser'

@Component( )
export class InputComponent {

	@State( )
	name: string = 'xd'

	@State( )
	arr: number[] = [ ]

	@State( )
	obj: any = { a: undefined, b: 2 }

	@State( )
	pass: boolean = false

	update( ) {
		this.arr = [ 1, 2, 3 ]
		this.pass = true
		this.name = 'XD'
		this.obj.a = 1
	}

	render( ) {
		setTimeout( this.update, 1500 )	
		
  	return (
			<>
				<div onclick={ this.update }>Click</div>
				<div none={ this.name }>{ this.name }</div>
				<>{ `${this.name}` }</>
				{ this.arr.map( ( e: number ) => <>{ e }</> ) }
				{ this.name }
				{ this.pass ? <>YES</> : <>NOT</> }
				{ this.obj.a || this.obj.b }
				{ [ 'a', 'b' ].map( ( e: string ) => <>{ e }</> ) }
				{ this.arr.map( ( e: number ) => <>{ e }</> ) }
				<>c</>
			</>
  	)
	}
}