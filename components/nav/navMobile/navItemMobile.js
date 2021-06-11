import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavItemMobile = (props) => {
	return (
		<AnchorLink href={props.path} className="block py-1 mx-3 font-serif text-xl font-bold text-white hover:text-copper">
			{props.title}
		</AnchorLink>
	);
};
