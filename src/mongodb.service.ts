import { Service, Logger } from 'riser'
import { connect } from 'mongoose'

@Service( )
export class MongodbService {

	async connect( ) {
		await connect( 'mongodb://root:root@localhost:27017/test?authSource=admin' )
		Logger( 'database connected' )
	}

}

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
		localStorage.setItem( `${this.constructor.name}-${key}`, JSON.stringify( value ) )
		if ( this.subscriptions.hasOwnProperty( key ) ) this.subscriptions[ key ]( value )
	}

	subscribe( key: string, callback: Function ): void {
		const value = localStorage.getItem( `${this.constructor.name}-${key}` )
		if ( value ) callback( JSON.parse( value ) )
		this.subscriptions[ key ] = callback
	}

	// PUEDO ENVIAR THIS en el constructor del component o mandar el id para el storages

	clear( ) {
	}

}

new class {

	//@Observable( 'data' ) // aqui se el id de la clase, el nombre de la propiedad quizas se pueda llamar global
	myprop: string = ''

	other: string = '123'
	data: DataObservable = new DataObservable

	constructor( ) {
		this.data.subscribe( 'ss', v => this.other = v )
		this.data.publish( 'ss', '321' )
		//this.data.email.publish( 'ss', '321' )

		setTimeout( ( ) => {
			console.log('asdasdasdasdasdasdasdasd',this.other)
		}, 2000 )
	}

}
