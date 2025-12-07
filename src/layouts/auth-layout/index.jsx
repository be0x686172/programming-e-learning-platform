import { Outlet } from "react-router";
import './style.scss';

const AuthLayout = () => {
	return (
		<div className="container-auth-layout">
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default AuthLayout
