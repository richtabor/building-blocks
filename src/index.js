/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Block Registration
 */
const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: __( 'Building Blocks (Author)', 'building-blocks' ),
	description: __( 'Add an author biography to build credibility and authority.', 'building-blocks' ),
	icon: icon,
	category,
	styles: [
		{
			name: 'circle',
			label: _x( 'Circle', 'block style', 'building-blocks' ),
			isDefault: true,
		},
		{
			name: 'square',
			label: _x( 'Square', 'block style', 'building-blocks' ),
		},
	],
	example: {},
	attributes,
	edit,
	save,
} );
