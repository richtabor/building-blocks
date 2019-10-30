/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { mediaUpload } from '@wordpress/editor';
import { RichText, MediaUpload, MediaUploadCheck, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { Button, Dashicon, Toolbar, IconButton, PanelBody, TextareaControl, ExternalLink, DropZone, Spinner } from '@wordpress/components';
import { isBlobURL } from '@wordpress/blob';

/**
 * Edit Function
 */
class AuthorEdit extends Component {
	constructor() {
		super( ...arguments );
		this.addImage = this.addImage.bind( this );
		this.onSelectImage = this.onSelectImage.bind( this );
	}

	onSelectImage( media ) {
		if ( media ) {
			this.props.setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		}
	}

	addImage( files ) {
		mediaUpload( {
			allowedTypes: [ 'image' ],
			filesList: files,
			onFileChange: ( [ media ] ) => this.onSelectImage( media ),
		} );
	}

	render() {
		const {
			className,
			attributes,
			setAttributes,
			isSelected,
		} = this.props;

		const {
			name,
			biography,
			mediaURL,
			mediaID,
			mediaALT,
		} = attributes;

		const dropZone = (
			<DropZone
				onFilesDrop={ this.addImage }
				label={ __( 'Drop to upload as avatar', 'building-blocks' ) }
			/>
		);

		return (
			<Fragment>
				{ mediaID &&
 					<BlockControls>
 						<MediaUploadCheck>
 							<Toolbar>
 								<MediaUpload
 									onSelect={ this.onSelectImage }
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
 				{ isSelected && mediaID && (
					<InspectorControls>
						<PanelBody title={ __( 'Author Settings', 'building-blocks' ) }>
							<TextareaControl
								label={ __( 'Alt Text (Alternative Text)', 'building-blocks' ) }
								value={ mediaALT }
								onChange={ ( nextMediaALT ) => {
									setAttributes( { mediaALT: nextMediaALT } );
								} }
								help={
									<Fragment>
										<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
											{ __( 'Describe the purpose of the image', 'building-blocks' ) }
										</ExternalLink>
										{ __( 'Leave empty if the image is purely decorative.', 'building-blocks' ) }
									</Fragment>
								}
							/>
						</PanelBody>
					</InspectorControls>
				) }
				<div className={ className }>
					{ dropZone }
					<figure className="wp-block-building-blocks-author__avatar">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ this.onSelectImage }
								allowedTypes="image"
								value={ mediaID }
								render={ ( { open } ) => (
									<Button onClick={ open }>
										{ ! mediaID ?
											<Dashicon icon="format-image" /> :
											<Fragment>
												{ isBlobURL( mediaURL ) && <Spinner /> }
												<img className="wp-block-building-blocks-author__avatar-img" src={ mediaURL } alt={ mediaALT } />
											</Fragment>
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
