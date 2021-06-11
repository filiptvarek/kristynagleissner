import { navData } from '/data/nav';
import { useMediaQuery } from '/hooks/mediaQuery';
import { NavListMobile } from './nav/navMobile/navListMobile';
import { NavListDesktop } from './nav/navDesktop/navListDesktop';

export const Nav = () => {
	const isMobile = useMediaQuery('(max-width: 640px)');

	if (isMobile) {
		return (
			<nav className="">
				<NavListMobile navData={navData} />
			</nav>
		);
	}
	return (
		<nav className="flex justify-center w-full items-center">
			<NavListDesktop navData={navData} />
		</nav>
	);
};
