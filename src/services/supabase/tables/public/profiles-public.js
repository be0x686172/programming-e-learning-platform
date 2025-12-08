import { supabase } from "../../client-supabase";

const queryProfileByEmail = async () => {
	let response;

	response = await supabase.from('profiles').select();
    return response;
}

export { queryProfileByEmail };
