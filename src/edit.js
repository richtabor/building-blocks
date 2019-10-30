/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Edit Function
 */
class AuthorEdit extends Component {

	render() {
		const {
			className,
		} = this.props;

		return (
			<div className={ className }>Hello World, (from the editor)</div>
		);
	}
}

export default AuthorEdit;
