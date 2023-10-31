import { Component, Property } from 'quartzjs'

@Component()
export class ButtonComponent {

	@Property()
	label: string

	@Property()
	onClick: any

	render( ) {
  	return (
  		<button class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.onClick}>
				{this.label}
  		</button>
  	)
	}
}