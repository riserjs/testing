import { Guard, Intercept, Logger } from 'quartzjs'

@Guard( )
export class AuthorizationGuard {

	@Logger( )
  @Intercept( )
	authorize( { path, message }: any ) {
		if ( path.startsWith( '/user' ) ) return false
		return true
	}

}