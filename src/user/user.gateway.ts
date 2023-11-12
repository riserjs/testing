import { Gateway, Request, Response, Logger, Expose, Inject } from 'riser'
import { User } from './user.model'
import { MongodbService } from '../mongodb.service'

@Gateway( '/user' )
export class UserGateway {

	@Inject( )
	mongodbService: MongodbService

	onBoot( ) {
		this.mongodbService.connect( )
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
