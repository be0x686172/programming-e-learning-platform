const TextInput = ({icon: IconComponent, text, type}) => {
	return (
		<div className="text-input">
			<div>
				<IconComponent />
				<input type={type} placeholder={text} />
			</div>
		</div>
	);
};

export default TextInput
