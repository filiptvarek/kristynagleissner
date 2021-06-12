import { Logo } from '../../logo';
import { NavItemMobile } from './navItemMobile';
import { CloseButton } from './closeButton';
import classNames from 'classnames';
import { useState } from 'react';
import { OpenButton } from './openButton';
import { SocialIcons } from '../../socialIcons/socialIcons';

export const NavListMobile = ({ navData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<div className="relative flex justify-center">
			<Logo width={200} height={80} />
			<OpenButton onClick={open} />
			<div
				className={classNames(
					'w-300 h-screen bg-tangerine fixed top-0 right-0 overflow-hidden bg-menu-pattern bg-right-top bg-no-repeat transition-transform transform',
					isOpen ? 'translate-x-0' : 'translate-x-full',
				)}
			>
				<CloseButton onClick={close} />
				<div className="flex flex-col justify-center h-full align-center">
					{navData.map((item) => (
						<NavItemMobile key={item.path} path={item.path} title={item.title} />
					))}
				</div>
				<SocialIcons />
			</div>
		</div>
	);
};
