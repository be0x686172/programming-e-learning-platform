import { BrowserRouter, Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";
import AuthPage from "../pages/auth-page";
import SignIn from '../pages/auth-page/forms-auth/signin-form';
import SignUp from '../pages/auth-page/forms-auth/signup-form';

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<AuthLayout />} >
					<Route path="" element={<AuthPage />}>
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing
