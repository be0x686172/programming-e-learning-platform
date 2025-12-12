import TextInputUI from "../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../components/ui/buttons-ui/submit-button";
import './style.scss';
import { NavLink, Outlet, useNavigate } from "react-router";
import { checkEmailExists } from "../../services/supabase/auth-supabase";
import { useEffect, useState } from "react";

const AuthPage = () => {

	const navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [outlet, setOutlet] = useState(false);

	const handleForm = async (event) => {
		let response;

		event.preventDefault();
		response = await checkEmailExists(email);
		if (response) {
			setOutlet(true);
			navigate('signin');
		}
		else {
			setOutlet(true);
			navigate('signup');
		}
	}

	return (
		<div className="auth-page">
			<h2>Welcome to <br /> Programming E-Learning Platform.</h2>
			<form onSubmit={(event) => handleForm(event)}>
				{!outlet ? <TextInputUI text={"Enter your e-mail address"} type={"email"} onChange={setEmail} required={true} /> : ''}
				{!outlet ? <SubmitButtonUI text="Continue" /> : ''}
				{outlet ? <Outlet context={email} /> : ''}
			</form>
			<hr />
			<p className="terms-use-and-private-policy-message">By registaring, you consent to our <span><NavLink>Terms <br /> of Use</NavLink></span> and <span><NavLink>Privacy Policy</NavLink></span>.</p>
		</div>
	);
};

export default AuthPage
