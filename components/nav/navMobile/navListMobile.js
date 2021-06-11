import { Logo } from '../../logo';
import { NavItemMobile } from './navItemMobile';
import { CloseButton } from './closeButton';
import classNames from 'classnames';
import { useState } from 'react';
import { CoffeeStain } from './coffeeStain';
import { OpenButton } from './openButton';

export const NavListMobile = ({ navData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<div className="relative flex justify-center">
			<Logo width={136} height={47} />
			<OpenButton onClick={open} />
			<div
				className={classNames(
					'w-300 h-screen bg-mineshaft fixed top-0 right-0 overflow-hidden transition-transform block transform',
					isOpen ? 'translate-x-0' : 'translate-x-full',
				)}
			>
				<CloseButton onClick={close} />
				<div className="p-4">
					{navData.map((item) => (
						<NavItemMobile key={item.path} path={item.path} title={item.title} />
					))}
				</div>
				<CoffeeStain />
			</div>
		</div>
	);
};
