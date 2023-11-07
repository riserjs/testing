import { Service, Initiate, Logger } from 'riser'
import { connect } from 'mongoose'

@Service()
export class MongodbService {

	@Initiate( )
	async connect( ) {
		await connect( 'mongodb://root:root@localhost:27017/test?authSource=admin' )
		Logger( 'database connected' )
	}

}