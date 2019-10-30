/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Block Registration
 */
registerBlockType( 'building-blocks/author', {
	title: __( 'Building Blocks (Author)', 'building-blocks' ),
	description: __( 'Add an author biography to build credibility and authority.', 'building-blocks' ),
	icon: icon,
	category: 'common',
	example: {},
	edit,
	save,
} );
