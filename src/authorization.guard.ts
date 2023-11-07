import { Guard, Intercept, Logger, Request } from 'riser'

@Guard( )
export class AuthorizationGuard {

	@Logger( )
  @Intercept( )
	authorize( { client, path, message }: Request ) {
		if ( path.startsWith( '/user' ) ) return false
		return true
	}

}