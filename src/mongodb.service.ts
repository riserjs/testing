import { Service, Logger } from 'riser'
import { connect } from 'mongoose'

@Service( )
export class MongodbService {

	async connect( ) {
		await connect( 'mongodb://root:root@localhost:27017/test?authSource=admin' )
		Logger( 'database connected' )
	}

}