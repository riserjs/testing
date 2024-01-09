import { Gateway, Request, Response, Logger, Expose, Inject } from 'riser'
import { Model } from 'riser/database'
import { UserSchema } from './user.schema'
import { UserService } from './user.service'

@Gateway( '/user' )
export class UserGateway {

	@Inject( { type: 'service', name: 'UserService' } )
	service: UserService

	@Inject( { type: 'model', name: 'User' } )
	User: Model < UserSchema >

	async onBoot( ) { }

	@Expose( )
	@Logger( )
	@Request( '/create' )
	async onCreate( { message }: Request ): Promise < Response > {

		const index = await this.User.read( { name: message } )
		if ( !index ) await this.User.create( { name: message } )
		const users = await this.User.read( { name: { $ne: message } }, true ) //not equal

		return Response( '/user/read', users )
	}

}