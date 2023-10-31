import { Database, Initiate, Logger } from 'quartzjs'
import { connect } from 'mongoose'

@Database()
export class MongodbDatabase {

	@Initiate( )
	async connect( ) {
		await connect( 'mongodb://root:root@localhost:27017/test?authSource=admin' )
		Logger( 'database connected' )
	}

}