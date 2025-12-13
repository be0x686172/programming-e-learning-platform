import './style.scss';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { checkPasswordRegex } from '../../../../utils/regex/password-regex';

const PasswordValidationFeature = ({ password }) => {

	const [passwordChecks, setPasswordChecks] = useState({
		lowercase: false,
		uppercase: false,
		number: false,
		specialCharacter: false,
		minLength: false
	});

	useEffect(() => {
		setPasswordChecks(checkPasswordRegex(password));
	}, [password]);
	
	return (
		<div className="password-validation-feature">
			<div className={`${!passwordChecks.lowercase ? 'not-valid' : ''}`}>
				<Check size={16} />
				<p>A lowercase letter</p>
			</div>
			<div className={`${!passwordChecks.uppercase ? 'not-valid' : ''}`}>
				<Check size={16} />
				<p>A capital (uppercase) letter</p>
			</div>
			<div className={`${!passwordChecks.number ? 'not-valid' : ''}`}>
				<Check size={16} />
				<p>A number</p>
			</div>
			<div className={`${!passwordChecks.specialCharacter ? 'not-valid' : ''}`}>
				<Check size={16} />
				<p>A special character (! @ # $ % ^ & ( ) *)</p>
			</div>
			<div className={`${!passwordChecks.minLength ? 'not-valid' : ''}`}>
				<Check size={16} />
				<p>Minimum 8 characters</p>
			</div>
		</div>
	);
};

export default PasswordValidationFeature
