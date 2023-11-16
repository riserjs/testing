import { } from 'riser'

//@Observable( )
export class DataObservable {

	// properti lis
	// JSON.stringify( { value: undefined } )

	subscriptions: any = { }

	publish( key: string, param: any ): void {
		const type = typeof param
		if ( this.subscriptions.hasOwnProperty( key ) ) this.subscriptions[ key ]( param )
		// localStorage.setItem( 'name', 'Obaseki Nosa' )
	}

	subscribe( key: string, callback: Function ): void {
		//localStorage.getItem( `${this.constructor.name}-${key}` )
		this.subscriptions[ key ] = callback
	}

	clear( ) {
	}

}