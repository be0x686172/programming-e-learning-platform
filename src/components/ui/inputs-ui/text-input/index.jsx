import './style.scss';

const TextInputUI = ({text, type, onChange, required, value, disabled}) => {
	return (
		<div className="text-input-ui">
			<input 
				type={type} 
				placeholder={text}
				onChange={(event) => onChange(event.target.value)}
				required={required}
				disabled={disabled}
				value={value}
			/>
		</div>
	);
};

export default TextInputUI
