import TextInputUI from "../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../components/ui/buttons-ui/submit-button";
import './style.scss';
import { NavLink } from "react-router";

const AuthPage = () => {

	const handleForm = async (event) => {
		let response;

		event.preventDefault();
		response = await queryProfileByEmail();
		console.log(response);
	}

	return (
		<div className="auth-page">
			<h2>Welcome to <br /> Programming E-Learning Platform.</h2>
			<form onSubmit={(event) => handleForm(event)}>
				<TextInputUI text={"Enter your e-mail address"} type={"email"} />
				<SubmitButtonUI text="Continue" />
			</form>
			<hr />
			<p className="terms-use-and-private-policy-message">By registaring, you consent to our <span><NavLink>Terms <br /> of Use</NavLink></span> and <span><NavLink>Privacy Policy</NavLink></span>.</p>
		</div>
	);
};

export default AuthPage
