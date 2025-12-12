import TextInputUI from "../../components/ui/inputs-ui/text-input";
import SubmitButtonUI from "../../components/ui/buttons-ui/submit-button";
import './style.scss';
import { NavLink, Outlet, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { authForm } from "../../services/forms/auth-form/auth-form";
import { signupForm } from "../../services/forms/auth-form/signup-form";
import { signinForm } from "../../services/forms/auth-form/signin-form";

const AuthPage = () => {

	const navigate = useNavigate();
	const [formData, setFormData] = useState({});
	const [outlet, setOutlet] = useState(false);
	const location = useLocation();
	const [activeOutlet, setActiveOutlet] = useState("auth");

	useEffect(() => { setActiveOutlet(location.pathname.split("/").pop()); }, [location]);

	return (
		<div className="auth-page">
			<h2>Welcome to <br /> Programming E-Learning Platform.</h2>
			<form onSubmit={
				activeOutlet == "auth" ? (event) => authForm(event, formData, setOutlet, navigate) :
				activeOutlet == "signup" ? (event) => signupForm(event, formData, navigate) :
				activeOutlet == "signin" ? (event) => signinForm(event, formData, navigate) :
				() => {}
			}>
				{!outlet ? <TextInputUI text={"Enter your e-mail address"} name={"email"} type={"email"} onChange={setFormData} required={true} /> : ''}
				{!outlet ? <SubmitButtonUI text="Continue" /> : ''}
				{outlet ? <Outlet context={{formData, setFormData}} /> : ''}
			</form>
			<hr />
			<p className="terms-use-and-private-policy-message">By registaring, you consent to our <span><NavLink>Terms <br /> of Use</NavLink></span> and <span><NavLink>Privacy Policy</NavLink></span>.</p>
		</div>
	);
};

export default AuthPage
