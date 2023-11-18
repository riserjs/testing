import { } from 'riser'

//@Observable( )
export class DataObservable {

	name: string = 'sam'
	email: string = 'sam@gmail.com'


	//@Observable( )
	myprop: string = ''
	// properti lis
	// JSON.stringify( { value: undefined } )

	subscriptions: any = { }

	publish( key: string, value: any ): void {
		const type = typeof value
		if ( this.subscriptions.hasOwnProperty( key ) ) this.subscriptions[ key ]( value )
		// localStorage.setItem( 'name', 'Obaseki Nosa' )
	}

	subscribe( key: string, value ): void {
		//localStorage.getItem( `${this.constructor.name}-${key}` )
		this.subscriptions[ key ] = value
	}

	clear( ) {
	}

}


new class {
	other: string = '123'
	data = new DataObservable

	constructor( ) {
		this.data.subscribe( 'ss', this.other )
		this.data.publish( 'ss', '321' )

		setTimeout( ( ) => {
			console.log('asdasdasdasdasdasdasdasd',this.other)
		}, 2000 )
	}
}


