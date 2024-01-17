import { Gateway, Request, Response, Logger, Expose, Inject } from 'riser'
import { Model } from 'riser/database'
import { UserSchema } from './user.schema'
import { UserService } from './user.service'

@Gateway( '/user' )
export class UserGateway {

	@Inject( 'UserService' )
	service: UserService

	@Inject( 'UserSchema' )
	model: Model < UserSchema >

	async onBoot( ) {
		/*new Promise( ( resolve, reject ) => {
			this.model.findOne( { name: 'Sam' } ).exec()
			.then( () => {
				console.log( 'yes')
				resolve('yes');
			} ).catch(() => {
				console.log('err')
				reject('err')
			})
		} )

		console.log( 'x' )*/
	}

	@Expose( )
	@Logger( )
	@Request( '/create' )
	async onCreate( { message }: Request ): Promise < Response > {

		const index = await this.model.read( { name: message } )
		if ( !index ) await this.model.create( { name: message } )
		const users = await this.model.read( { name: { $ne: message } }, true ) //not equal

		return Response( '/user/read', users )
	}

}