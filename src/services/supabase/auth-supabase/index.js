import { supabase } from "../";

const checkExistEmail = async (email) => {
	let response;

	response = await supabase.auth.signInWithOtp({ email: email });
	return (response);

}

export { checkExistEmail };
