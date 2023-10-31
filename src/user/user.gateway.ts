import { Gateway, Request, Response, Logger, Expose } from 'quartzjs'
import { User } from './user.model'

@Gateway( '/user' )
export class UserGateway {

	@Expose( )
	@Logger( )
	@Request( '/create' )
	async onCreate( name: string ) {
		
		const index = await User.findOne( { name } )

		if ( !index ) {
			const user = new User( { name } )
			await user.save( )	
		}
		
		const users = await User.find( { name: { $ne: name } }, { _id: 0, __v: 0 } )

		return Response( '/user/read', users )
	}

}
