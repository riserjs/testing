import { Gateway, Request, Response, Broadcast, Expose, Logger } from 'riser'
import { Message } from './message.model'

@Gateway( '/message' )
export class MessageGateway {

	@Logger( 'in' )
	@Request( '/create' )
	async onCreate( { client, message }: any ) {
		const index = new Message( { ...message, users: [ message.from, message.to ] } )
		await index.save( )
		Broadcast( '/message/read', { client: message.from, message } )
		Broadcast( '/message/read', { client: message.to, message } )
	}

	@Logger( 'out' )
	@Request( '/readall' )
	async onReadAll( { client, message }: any ) {
		const all = await Message.find( { users: { '$all': [ message.from, message.to ] } }, { _id: 0, __v: 0, users: 0 } ).sort( {$natural : -1} ).limit( 10 )
		return Response( '/message/readall', { client, message: all.reverse( ) } )
	}

}
