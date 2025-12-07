import { useState } from "react";
import { Outlet } from "react-router";
import TextInput from "../../components/ui/inputs/text-input";
import { AtSign } from 'lucide-react';

const AuthPage = () => {

	const [outletActive, setOutletActive] = useState(false);

	return (
		<div className="auth-page">
			<h2>Welcome to <br /> Programming E-Learning Platform.</h2>
			<form>
				<TextInput text={"Entrer votre adresse e-mail"} type={"email"} icon={AtSign} />
			</form>
			{outletActive ? <Outlet /> : ''}
		</div>
	);
};

export default AuthPage
