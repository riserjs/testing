import { Children, Component, Property } from 'riser'

@Component( )
export class Box {

	render( children: Children ) {
		return (
  		<div style={ {
				height: '100vh',
				width: '100vw',
				margin: 0,
				padding: 0,
				display: 'flex',
				flexDirection: 'column',
				color: 'white'
			} }>
				{ children }
  		</div>
  	)
	}

}
