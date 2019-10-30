/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText, getColorClassName } from '@wordpress/block-editor';

/**
 * Save Function
 */
const save = ( { className, attributes } ) => {

	const backgroundClass = getColorClassName( 'background-color', attributes.backgroundColor );

	const classes = classnames( {
		'has-background': attributes.backgroundColor || attributes.customBackgroundColor,
		[ backgroundClass ]: backgroundClass,
	} );

	const styles = {
		backgroundColor: backgroundClass ? undefined : attributes.customBackgroundColor,
	};

	return (
		<div className={ classes } style={ styles }>

			{ attributes.mediaID && (
				<figure className="wp-block-building-blocks-author__avatar">
					<img className="wp-block-building-blocks-author__avatar-img" src={ attributes.mediaURL } alt={ attributes.mediaALT } />
				</figure>
			) }

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