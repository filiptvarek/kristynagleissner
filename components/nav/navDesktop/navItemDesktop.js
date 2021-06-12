export const NavItemDesktop = (props) => {
	return (
		<a href={props.path} className="mx-3 font-serif text-base text-white hover:underline">
			{props.title}
		</a>
	);
};
