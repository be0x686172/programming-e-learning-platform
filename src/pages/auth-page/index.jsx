import { useState } from "react";
import { Outlet } from "react-router";
import TextInputUI from "../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../components/ui/buttons-ui/submit-button";
import './style.scss';

const AuthPage = () => {

	const [outletActive, setOutletActive] = useState(false);

	return (
		<div className="auth-page">
			<h2>Welcome to <br /> Programming E-Learning Platform.</h2>
			<form>
				<TextInputUI text={"Enter your e-mail address"} type={"email"} />
				<SubmitButtonUI text="Continue" />
			</form>
			{outletActive ? <Outlet /> : ''}
		</div>
	);
};

export default AuthPage
