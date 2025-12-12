import { useState } from "react";
import SubmitButtonUI from "../../../../components/ui/buttons-ui/submit-button";
import TextInputUI from "../../../../components/ui/inputs-ui/text-input";
import { NavLink, useOutletContext } from "react-router";
import { ChevronLeft } from 'lucide-react';

const SignIn = () => {

	const {formData, setFormData} = useOutletContext();

	return (
		<>
			<div className="back-container">
				<ChevronLeft size={19} />
				<a href="/auth">back</a>
			</div>
			<TextInputUI value={formData.email} disabled={true} />
			<TextInputUI text={"Enter your password"} name={"password"} type={"password"} onChange={setFormData} required={true} />
			<SubmitButtonUI text={"Sign In"} />
		</>
	);
};

export default SignIn
