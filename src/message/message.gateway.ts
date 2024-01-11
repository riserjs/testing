import { Gateway, Request, Response, Broadcast, Logger, Inject } from 'riser'
import { Model } from 'riser/database'
import { MessageSchema } from './message.schema'

@Gateway( '/message' )
export class MessageGateway {

	@Inject( { type: 'model', name: 'Message' } )
	Message: Model < MessageSchema >

	@Logger( 'in' )
	@Request( '/create' )
	async onCreate( { message }: Request ) {
		await this.Message.create( { ...message, users: [ message.from, message.to ] } )
		Broadcast( { clients: [ message.from, message.to ], path: '/message/read', message } )
	}

	@Logger( 'in' )
	@Request( '/readall' )
	async onReadAll( { message }: Request ): Promise < Response > {
		const all = await this.Message.find( { users: { '$all': [ message.from, message.to ] } }, { _id: 0, __v: 0, users: 0 } ).sort( { $natural : -1 } ).limit( 10 )
		console.log(all)
		return Response( '/message/readall', all.reverse( ) )
	}

}