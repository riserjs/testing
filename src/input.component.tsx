import { Component, State, Receptor, Emitter } from 'riser'

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
				<div>{ `${this.name}` }</div>
				{ this.arr.map( ( e: number ) => <div>{ e }</div> ) }
				{ this.name }
				{ this.pass ? <div>YES</div> : <div>NOT</div> }
				{ this.obj.a || this.obj.b }
				{ [ 'a', 'b' ].map( ( e: string ) => <div>{ e }</div> ) }
				{ this.arr.map( ( e: number ) => <div>{ e }</div> ) }
				<div>c</div>
				<div>d</div>
			</>
  	)
	}
}