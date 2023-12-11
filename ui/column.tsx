import { Children, Component, Property } from 'riser'

@Component( )
export class Column {

	@Property( )
	width: string = '0px'

	@Property( )
	color: string = 'white'

	@Property( )
	spaces: string = '0px'

	render( children: Children ) {
		return (
  		<div style={ {
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: this.color,
				height: '100%',
				width: this.width,
				gap: this.spaces,
			} }>
				{ children }
  		</div>
  	)
	}

}
