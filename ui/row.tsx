import { Children, Component, Property } from 'riser'

@Component( )
export class Row {

	@Property( )
	height: string = '0px'

	@Property( )
	color: string = 'white'

	@Property( )
	spaces: string = '0px'

	render( children: Children ) {
		return (
  		<div style={ {
				display: 'flex',
				flexDirection: 'row',
				backgroundColor: this.color,
				width: '100%',
				height: this.height,
				gap: this.spaces,
			} }>
				{ children }
  		</div>
  	)
	}

}
