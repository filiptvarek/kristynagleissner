import { IconItem } from './iconItem';
import Youtube from '/icons/Youtube.svg';
import Podcasts from '/icons/Podcasts.svg';
import Spotify from '/icons/Spotify.svg';
import Instagram from '/icons/Instagram.svg';

export const IconList = ({ socialData }) => {
	return (
		<>
			{socialData.map((item) => {
				let icon;
				switch (item.name) {
					case 'youtube':
						icon = Youtube;
						break;
					case 'isntagram':
						icon = Instagram;
						break;
					case 'podcasts':
						icon = Podcasts;
						break;
					case 'spotify':
						icon = Spotify;
						break;
					default:
						icon = Instagram;
				}
				return <IconItem key={item.name} name={item.name} icon={icon} path={item.path} />;
			})}
		</>
	);
};
