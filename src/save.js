/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Save Function
 */
const save = ( { className, attributes } ) => {
	return (
		<div className={ className }>
			<figure className="wp-block-building-blocks-author__avatar">
				<img className="wp-block-building-blocks-author__avatar-img" src="" alt="" />
			</figure>

			<div className="wp-block-building-blocks-author__content">
				<RichText.Content
					tagName="span"
					className="wp-block-building-blocks-author__name"
					value={ attributes.name }
				/>
				<RichText.Content
					tagName="span"
					className="wp-block-building-blocks-author__biography"
					value={ attributes.biography }
				/>
			</div>
		</div>
	);
};

export default save;