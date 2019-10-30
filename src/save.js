/**
 * Save Function
 */
const save = ( { className } ) => {
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
};

export default save;