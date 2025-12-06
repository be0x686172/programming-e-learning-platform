import { Outlet } from "react-router";

const AuthLayout = () => {
	return (
		<>
			<header className="header-auth-layout">
				<h1>Programming E-Learning Platform</h1>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default AuthLayout
