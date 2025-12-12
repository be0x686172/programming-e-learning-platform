import { useState } from "react";
import SubmitButtonUI from "../../../../components/ui/buttons-ui/submit-button";
import TextInputUI from "../../../../components/ui/inputs-ui/text-input";
import { useOutletContext } from "react-router";

const SignIn = () => {

	const email = useOutletContext();
	const [password, setPassword] = useState(null);

	return (
		<>
			<TextInputUI value={email} disabled={true} />
			<TextInputUI text={"Enter your password"} type={"password"} onChange={setPassword} required={true} />
			<SubmitButtonUI text={"Sign In"} />
		</>
	);
};

export default SignIn
