import MenuIcon from '../../icons/Menu.svg';

export const OpenButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className="absolute w-6 transform -translate-y-1/2 right-4 center top-1/2">
			<MenuIcon />
		</button>
	);
};
