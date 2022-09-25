const WindowWrapper = ({ children }) => {
	return (
		<div className="h-screen w-full flex items-center justify-center bg-outerbg">
			{children}
		</div>
	);
};

export default WindowWrapper;
