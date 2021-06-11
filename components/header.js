import { Nav } from './nav';

export const Header = () => {
	return (
		<>
			<header className="sticky top-0 left-0 z-10 py-2 bg-white">
				<Nav />
			</header>
		</>
	);
};
