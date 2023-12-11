import { Children, Component, Property } from 'riser'

@Component( )
export class Item {

	@Property( )
	color: string = 'white'

	@Property( )
	height: string = '0px'

	@Property( )
	width: string = '0px'

	@Property( )
	align: string = 'normal'

	render( children: Children ) {
		return (
  		<div style={ {
				display: 'flex',
				alignItems: this.align,
				justifyContent: this.align,
				backgroundColor: this.color,
				height: this.height,
				width: this.width
			} }>
				{ children }
  		</div>
  	)
	}

}