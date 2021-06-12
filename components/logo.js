import Image from 'next/image';

export const Logo = ({ width = 300, height = 80 }) => {
	return (
		<div>
			<a className="block mx-5" href="#" data-target="toTop">
				<Image src="/images/logo.svg" alt="logo" width={width} height={height} />
			</a>
		</div>
	);
};
