import Image from 'next/image';
export const CoffeeStain = () => {
	return (
		<div className="absolute transform -translate-y-1/2 top-1/2 -right-20 -rotate-12 opacity-20">
			<Image src="/images/Stamp.svg" width="1000" height="905" />
		</div>
	);
};
