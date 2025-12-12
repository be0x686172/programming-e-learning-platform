import { useState } from "react";
import TextInputUI from "../../../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../../../components/ui/buttons-ui/submit-button";
import { useOutletContext } from "react-router";

const SignUp = () => {

	const email = useOutletContext();

	return (
		<>
			<TextInputUI value={email} disabled={true} />
			<TextInputUI text={"Enter your password"} type={"password"} required={true} onChange={() => {}} />
			<TextInputUI text={"Confirm your password"} type={"password"} required={true} onChange={() => {}} />
			<SubmitButtonUI text={"Sign Up"} />
		</>
	);
};

export default SignUp
