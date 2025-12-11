import { useState } from "react";
import TextInputUI from "../../../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../../../components/ui/buttons-ui/submit-button";

const SignUp = () => {
	return (
		<>
			<TextInputUI text={"Enter your password"} type={"password"} required={true} />
			<TextInputUI text={"Confirm your password"} type={"password"} required={true} />
			<SubmitButtonUI text={"Sign Up"} />
		</>
	);
};

export default SignUp
