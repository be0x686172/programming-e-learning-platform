import './style.scss';
import { Check } from 'lucide-react';

const PasswordValidationFeature = () => {
	return (
		<div className="password-validation-feature">
			<div className='not-valid'><Check size={16} /><p>A lowercase letter</p></div>
			<div><Check size={16} /><p>A capital (uppercase) letter</p></div>
			<div><Check size={16} /><p>A number</p></div>
			<div><Check size={16} /><p>A special character ()</p></div>
			<div><Check size={16} /><p>Minimum 8 characters</p></div>
		</div>
	);
};

export default PasswordValidationFeature
