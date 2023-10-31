import { Guard, Intercept, Logger } from 'riser'

@Guard( )
export class AuthorizationGuard {

	@Logger( )
  @Intercept( )
	authorize( { path, message }: any ) {
		if ( path.startsWith( '/user' ) ) return false
		return true
	}

}