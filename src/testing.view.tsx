import { View } from 'riser'
import { Box, Row, Column, Item } from '../ui'

@View( '/testing' )
export class TestingView {
	render( ) {
  	return (
  		<Box>
				<Row height='100px' color='purple'>
					{/* HEADER */}
					<Item color='black' height='100px' width='100px' align='center'>A</Item>
					<Item color='gray' height='100px' width='100px' align='center'>B</Item>
				</Row>
				<Row height='100%'>
					<Column width='20%' color='red'>
						{/* SIDEBAR */}
						<Item color='orange' height='20px' width='100%'>C</Item>
						<Item color='coral' height='20px' width='100%'>D</Item>
					</Column>
					<Column width='80%' color='blue'>
						{/* CONTENT */}
					</Column>
				</Row>
				<Row height='100px' color='green'>
					{/* FOOTER */}
				</Row>
			</Box>
  	)
	}
}

// ALIGNMENT