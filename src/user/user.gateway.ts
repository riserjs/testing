import { Gateway, Request, Response, Logger, Expose, Inject, Initiate } from 'riser'
import { User } from './user.model'
import { UserService } from './user.service'

@Gateway( '/user' )
export class UserGateway {

	@Inject( )
	userService: UserService

	@Initiate( )
	onLaunch( ) {
		this.userService.onLaunch( )
	}

	@Expose( )
	@Logger( )
	@Request( '/create' )
	async onCreate( { message }: Request ): Promise < Response > {
		const index = await User.findOne( { name: message } )

		if ( !index ) await User.create( { name: message } )

		const users = await User.find( { name: { $ne: message } }, { _id: 0, __v: 0 } )

		return Response( '/user/read', users )
	}

}
