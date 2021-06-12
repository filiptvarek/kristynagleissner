export const IconItem = ({ name, path, icon }) => {
	const Icon = icon;
	return (
		<>
			<a href={path} title={name} className="flex items-center w-1/2 px-1 py-1 text-white">
				<Icon />
			</a>
		</>
	);
};
