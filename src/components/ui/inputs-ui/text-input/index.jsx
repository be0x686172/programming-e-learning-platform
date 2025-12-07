import './style.scss';

const TextInputUI = ({text, type}) => {
	return (
		<div className="text-input-ui">
			<input type={type} placeholder={text} />
		</div>
	);
};

export default TextInputUI
