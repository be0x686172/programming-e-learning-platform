import './style.scss';

const TextInputUI = ({text, type, name, onChange, required, value, disabled, onFocus}) => {
	return (
		<div className="text-input-ui">
			<input 
				type={type} 
				placeholder={text}
				onChange={onChange ? (event) => onChange(prev => ({...prev, [name]: event.target.value})) : () => {}}
				required={required}
				disabled={disabled}
				value={value}
				onFocus={onFocus ? () => onFocus(true) : () => {}}
				onBlur={onFocus ? () => onFocus(false) : () => {}}
			/>
		</div>
	);
};

export default TextInputUI
