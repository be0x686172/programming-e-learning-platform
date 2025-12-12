import './style.scss';
import { Check } from 'lucide-react';

const PasswordValidationFeature = () => {
	return (
		<div className="password-validation-feature">
			<div className='left'>
				<div><Check size={16} /><p></p></div>
			</div>
			<div className='right'>

			</div>
		</div>
	);
};

export default PasswordValidationFeature
