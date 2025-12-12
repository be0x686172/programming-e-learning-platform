import { checkEmailExists } from "../../supabase/auth-supabase";

const authForm = async (event, formData, setOutlet, navigate) => {
	let response;

	event.preventDefault();
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
