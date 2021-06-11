import { NavItemDesktop } from './navItemDesktop';
import { Logo } from '../../logo';
export const NavListDesktop = ({ navData }) => {
	return (
		<>
			{navData
				.filter((item) => item.position === 'left')
				.map((item) => (
					<NavItemDesktop key={item.path} path={item.path} title={item.title} />
				))}
			<Logo />
			{navData
				.filter((item) => item.position === 'right')
				.map((item) => (
					<NavItemDesktop key={item.path} path={item.path} title={item.title} />
				))}
		</>
	);
};
