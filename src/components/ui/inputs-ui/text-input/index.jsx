import './style.scss';

const TextInputUI = ({text, type, onChange, required}) => {
	return (
		<div className="text-input-ui">
			<input type={type} placeholder={text} onChange={(event) => onChange(event.target.value)} required={required} />
		</div>
	);
};

export default TextInputUI
