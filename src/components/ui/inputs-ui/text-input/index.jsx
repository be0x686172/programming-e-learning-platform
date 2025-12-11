import './style.scss';

const TextInputUI = ({text, type, onChange}) => {
	return (
		<div className="text-input-ui">
			<input type={type} placeholder={text} onChange={(event) => onChange(event.target.value)} />
		</div>
	);
};

export default TextInputUI
