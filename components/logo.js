import Image from 'next/image';

export const Logo = ({ width = 194, height = 67 }) => {
	return (
		<div>
			<a className="mx-5 block" href="#" data-target="toTop">
				<Image src="/images/logo.svg" alt="logo" width={width} height={height} />
			</a>
		</div>
	);
};
