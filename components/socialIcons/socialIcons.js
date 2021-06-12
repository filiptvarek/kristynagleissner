import { socialData } from '/data/social';
import { IconList } from './iconList';
import { useMediaQuery } from '/hooks/mediaQuery';

export const SocialIcons = () => {
	const isMobile = useMediaQuery('(max-width: 640px)');
	if (isMobile) {
		return (
			<div className="absolute flex w-1/2 transform -translate-x-1/2 bottom-4 left-1/2">
				<IconList socialData={socialData} />
			</div>
		);
	}
	return (
		<div className="absolute flex flex-wrap w-20 h-full transform -translate-y-1/2 top-1/2 right-4">
			<IconList socialData={socialData} />
		</div>
	);
};
