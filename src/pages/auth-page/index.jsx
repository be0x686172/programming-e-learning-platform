import { useState } from "react";
import { Outlet } from "react-router";
import TextInput from "../../components/inputs/text-input";

const AuthPage = () => {

	const [outletActive, setOutletActive] = useState(false);

	return (
		<div className="auth-page">
			<h2>Welcome to <br /> Programming E-Learning Platform.</h2>
			<form>
				<TextInput />
			</form>
			{outletActive ? <Outlet /> : ''}
		</div>
	);
};

export default AuthPage
