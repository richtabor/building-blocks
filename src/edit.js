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
			<div className={ className }>
				<figure className="wp-block-building-blocks-author__avatar">
					<img className="wp-block-building-blocks-author__avatar-img" src="" alt="" />
				</figure>

				<div className="wp-block-building-blocks-author__content">
					<span className="wp-block-building-blocks-author__name">
						Rich Tabor
					</span>
					<span className="wp-block-building-blocks-author__biography">
						Senior Product Manager, WordPress Experience at GoDaddy. Previously CoBlocks & ThemeBeans.
					</span>
				</div>
			</div>
		);
	}
}

export default AuthorEdit;
