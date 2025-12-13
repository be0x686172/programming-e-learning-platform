import './style.scss';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const PasswordValidationFeature = ({password, confirmPassword}) => {

	const [validLowercase, setValidLowercase] = useState(false);
	const [validUppercase, setValidUppercase] = useState(true);
	const [validNumber, setValidNumber] = useState(false);
	const [validSpecialCharacter, setValidSpecialCharacter] = useState(false);
	const [validHeightCharacters, setValidHeightCharacters] = useState(false);

	return (
		<div className="password-validation-feature">
			<div className={`${!validLowercase ? 'not-valid' : ''}`}><Check size={16} /><p>A lowercase letter</p></div>
			<div className={`${!validUppercase ? 'not-valid' : ''}`}><Check size={16} /><p>A capital (uppercase) letter</p></div>
			<div className={`${!validNumber ? 'not-valid' : ''}`}><Check size={16} /><p>A number</p></div>
			<div className={`${!validSpecialCharacter ? 'not-valid' : ''}`}><Check size={16} /><p>A special character ()</p></div>
			<div className={`${!validHeightCharacters ? 'not-valid' : ''}`}><Check size={16} /><p>Minimum 8 characters</p></div>
		</div>
	);
};

export default PasswordValidationFeature
