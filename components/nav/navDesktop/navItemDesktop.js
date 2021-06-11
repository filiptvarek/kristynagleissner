export const NavItemDesktop = (props) => {
	return (
		<a href={props.path} className="mx-3 font-serif text-base font-bold hover:text-copper">
			{props.title}
		</a>
	);
};
