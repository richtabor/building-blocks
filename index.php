<?php
/**
 * Plugin Name: The Building Blocks of Building Blocks
 * Plugin URI: https://github.com/richtabor/building-blocks
 * Description: Let’s dive in and learn how to build Gutenberg blocks for WordPress with Javascript. We’ll explore the foundations of the block development, how to setup a local block development environment and actually build a block or two using the latest techniques, block controls and settings panels.
 * Version: 1.0.0
 * Author: Rich Tabor
 *
 * @package building-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
function building_blocks_load_textdomain() {

	load_plugin_textdomain( 'building-blocks', false, basename( __DIR__ ) . '/languages' );

}
add_action( 'init', 'building_blocks_load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued.
 */
function building_blocks_register_block() {

	// Gutenberg is not active.
	if ( ! function_exists( 'register_block_type' ) ) {

		return;

	}

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	// Block Javascript
	wp_register_script(
		'building-blocks',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
	);

	// Editor Styling
	wp_register_style(
		'building-blocks-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// Frontend Styling
	wp_register_style(
		'building-blocks-frontend',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// Register block
	register_block_type(
		'building-blocks/author',
		array(
			'editor_script' => 'building-blocks',
			'style'         => 'building-blocks-frontend',
			'editor_style'  => 'building-blocks-editor',
		)
	);

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'building-blocks', 'building-blocks' );
	}

}
add_action( 'init', 'building_blocks_register_block' );
