export const NavItemMobile = (props) => {
	return (
		<a href={props.path} className="block py-1 mx-3 font-serif text-lg font-bold text-center text-white hover:text-copper">
			{props.title}
		</a>
	);
};
