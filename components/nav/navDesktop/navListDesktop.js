import { NavItemDesktop } from './navItemDesktop';
import { Logo } from '../../logo';
import { SocialIcons } from '../../socialIcons/socialIcons';
export const NavListDesktop = ({ navData }) => {
	return (
		<>
			<Logo />
			<div>
				{navData.map((item) => (
					<NavItemDesktop key={item.path} path={item.path} title={item.title} />
				))}
			</div>
			<SocialIcons />
		</>
	);
};
