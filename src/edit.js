/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { RichText, MediaUpload, MediaUploadCheck, BlockControls } from '@wordpress/block-editor';
import { Button, Dashicon, Toolbar, IconButton } from '@wordpress/components';

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
			mediaURL,
			mediaID,
		} = attributes;

		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};

		return (
			<Fragment>
				{ mediaID &&
 					<BlockControls>
 						<MediaUploadCheck>
 							<Toolbar>
 								<MediaUpload
 									onSelect={ onSelectImage }
 									allowedTypes="image"
 									value={ mediaID }
 									render={ ( { open } ) => (
 										<IconButton
 											className="components-toolbar__control"
 											label={ __( 'Edit avatar', 'building-blocks' ) }
 											icon="edit"
 											onClick={ open }
 										/>
 									) }
 								/>
 							</Toolbar>
 						</MediaUploadCheck>
 					</BlockControls>
 				}
				<div className={ className }>
					<figure className="wp-block-building-blocks-author__avatar">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes="image"
								value={ mediaID }
								render={ ( { open } ) => (
									<Button onClick={ open }>
										{ ! mediaID ?
											<Dashicon icon="format-image" /> :
											<img className="wp-block-building-blocks-author__avatar-img" src={ mediaURL } alt={ __( 'Upload Avatar', 'building-blocks' ) } />
										}
									</Button>
								) }
							>
							</MediaUpload>
						</MediaUploadCheck>
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
			</Fragment>
		);
	}
}

export default AuthorEdit;
