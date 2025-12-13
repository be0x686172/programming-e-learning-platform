import TextInputUI from "../../../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../../../components/ui/buttons-ui/submit-button";
import { useOutletContext } from "react-router";
import { ChevronLeft } from "lucide-react";
import PasswordValidationFeature from "../../../../components/features/auth-page/password-validation-feature";

const SignUp = () => {

	const {formData, setFormData} = useOutletContext();

	return (
		<>
			<div className="back-container">
				<ChevronLeft size={19} />
				<a href="/auth">back</a>
			</div>
			<TextInputUI value={formData.email} disabled={true} />
			<TextInputUI text={"Enter your password"} name={"password"} type={"password"} required={true} onChange={setFormData} />
			<TextInputUI text={"Confirm your password"} name={"confirmPassword"} type={"password"} required={true} onChange={setFormData} />
			<PasswordValidationFeature password={formData.password} confirmPassword={formData.confirmPassword} />
			<SubmitButtonUI text={"Sign Up"} />
		</>
	);
};

export default SignUp
