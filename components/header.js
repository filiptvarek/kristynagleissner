import { Nav } from './nav';
import { useMediaQuery } from '/hooks/mediaQuery';
import classNames from 'classnames';

export const Header = () => {
	const isMobile = useMediaQuery('(max-width: 640px)');
	return (
		<>
			<header
				className={classNames(
					'sticky top-0 left-0 z-10 py-2 bg-no-repeat bg-tangerine bg-header-pattern',
					isMobile && 'bg-left-10',
				)}
			>
				<Nav />
			</header>
		</>
	);
};
