import { supabase } from "../";

const checkEmailExists = async (email) => {
	let response;

	response = await supabase.functions.invoke('check-email-exists', {
		body: { email: email }
	});
	return (response.data);
}

export { checkEmailExists };
