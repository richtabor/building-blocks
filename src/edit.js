/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

/**
 * Edit Function
 */
class AuthorEdit extends Component {

	render() {
		const {
			className,
			attributes,
			setAttributes,
		} = this.props;

		const {
			name,
			biography,
		} = attributes;

		return (
			<div className={ className }>
				<figure className="wp-block-building-blocks-author__avatar">
					<img className="wp-block-building-blocks-author__avatar-img" src="" alt="" />
				</figure>

				<div className="wp-block-building-blocks-author__content">
					<RichText
						identifier="name"
						tagName="span"
						className="wp-block-building-blocks-author__name"
						multiline={ false }
						onChange={ ( nextName ) => {
							setAttributes( { name: nextName } );
						} }
						value={ name }
						placeholder={
							// translators: placeholder text used for the quote
							__( 'Write author name…', 'building-blocks' )
						}
						keepPlaceholderOnFocus
					/>
					<RichText
						identifier="biography"
						tagName="span"
						className="wp-block-building-blocks-author__biography"
						onChange={ ( nextBiography ) => {
							setAttributes( { biography: nextBiography } );
						} }
						value={ biography }
						placeholder={
							// translators: placeholder text used for the quote
							__( 'Write author biography…', 'building-blocks' )
						}
						keepPlaceholderOnFocus
					/>
				</div>
			</div>
		);
	}
}

export default AuthorEdit;
