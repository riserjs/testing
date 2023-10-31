import { Gateway, Request, Response, Broadcast, Expose, Logger } from 'quartzjs'
import { Message } from './message.model'

@Gateway( '/message' )
export class MessageGateway {

	@Expose( )
	@Logger( 'in' )
	@Request( '/create' )
	async onCreate( message: any ) {
		const index = new Message( { ...message, users: [ message.from, message.to ] } )
		await index.save( )
		Broadcast( '/message/read', message )
	}

	@Expose( )
	@Logger( 'in' )
	@Request( '/readall' )
	async onReadAll( message: any ) {
		const all = await Message.find( { users: { '$all': [ message.from, message.to ] } }, { _id: 0, __v: 0, users: 0 } ).sort( { _id: 1 } ).limit( 10 )
		return Response( '/message/readall', all )
	}

}
