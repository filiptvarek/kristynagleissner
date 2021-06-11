import Close from '../../icons/Close.svg';

export const CloseButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className="absolute w-6 text-white right-4 center top-5">
			<Close />
		</button>
	);
};
