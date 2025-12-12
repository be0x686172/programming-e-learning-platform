import { useState } from "react";
import SubmitButtonUI from "../../../../components/ui/buttons-ui/submit-button";
import TextInputUI from "../../../../components/ui/inputs-ui/text-input";
import { NavLink, useOutletContext } from "react-router";
import { ChevronLeft } from 'lucide-react';

const SignIn = () => {

	const email = useOutletContext();
	const [password, setPassword] = useState(null);

	return (
		<>
			<div className="back-container">
				<ChevronLeft size={19} />
				<a href="/auth">back</a>
			</div>
			<TextInputUI value={email} disabled={true} />
			<TextInputUI text={"Enter your password"} type={"password"} onChange={setPassword} required={true} />
			<SubmitButtonUI text={"Sign In"} />
		</>
	);
};

export default SignIn
