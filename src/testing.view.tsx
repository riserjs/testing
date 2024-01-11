import { View } from 'riser'
import { Box, Row, Column } from 'riser/interface'

@View( '/testing' )
export class TestingView {
	render( ) {
  	return (
  		<Box height='100%' width='100%' color='gray'>
				<Row height='100px'>
					{/* HEADER */}
					<Box color='black' height='100%' width='100px' vertical='middle' horizontal='middle'>A</Box>
					<Box color='silver' height='100%' width='100px' vertical='middle' horizontal='middle'>B</Box>
				</Row>
				<Row height='100%'>
					<Column width='20%'>
						{/* SIDEBAR */}
						<Box color='orange' height='20px' width='100%'>C</Box>
						<Box color='coral' height='20px' width='100%'>D</Box>
					</Column>
					<Column width='80%'>
						{/* CONTENT */}
						<Box color='blue' height='100%' width='100%'>E</Box>
					</Column>
				</Row>
				<Row height='100px'>
					{/* FOOTER */}
					<Box color='green' height='100%' width='100%'>F</Box>
				</Row>
			</Box>
  	)
	}
}


const props = {
	height: 'h',
	width: 'w',
	vertical: 'y',
	horizontal: 'h',
	background: 'b',
	align: 'a',
	space: 's',
	margin: 'm',
	padding: 'p'
}