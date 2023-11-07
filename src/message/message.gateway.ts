import { Gateway, Request, Response, Broadcast, Expose, Logger } from 'riser'
import { Message } from './message.model'

@Gateway( '/message' )
export class MessageGateway {

	@Logger( 'in' )
	@Request( '/create' )
	async onCreate( { message }: Request ) {
		await Message.create( { ...message, users: [ message.from, message.to ] } )
		Broadcast( { clients: [ message.from, message.to ], path: '/message/read', message } )
	}

	@Logger( 'in' )
	@Request( '/readall' )
	async onReadAll( { message }: Request ): Promise < Response > {
		const all = await Message.find( { users: { '$all': [ message.from, message.to ] } }, { _id: 0, __v: 0, users: 0 } ).sort( { $natural : -1 } ).limit( 10 )
		return Response( '/message/readall', all.reverse( ) )
	}

}
