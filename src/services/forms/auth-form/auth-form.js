import { checkEmailExists } from "../../supabase/auth-supabase";
import { checkEmailRegex } from "../../../utils/regex/email-regex";

const authForm = async (event, formData, setOutlet, navigate, setErrorMessage) => {
	let response;

	event.preventDefault();
	if (!checkEmailRegex(formData.email)) {
		setErrorMessage("Your e-mail is invalid !");
		return ;
	}
	else setErrorMessage(null);
	response = await checkEmailExists(formData.email);
	if (response) {
		setOutlet(true);
		navigate('signin');
	}
	else {
		setOutlet(true);
		navigate('signup');
	}
}

export { authForm };
