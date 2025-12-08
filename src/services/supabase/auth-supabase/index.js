import { supabase } from "../";

const checkEmailExists = async (email) => {
	let response;

	response = await supabase.functions.invoke('check-email-exists');
	return (response);
}

export { checkEmailExists };
