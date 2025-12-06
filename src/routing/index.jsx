import { BrowserRouter, Routes, Route } from "react-router";

import SignIn from '../pages/auth-page/forms-auth/signin-form';
import SignUp from '../pages/auth-page/forms-auth/signup-form';

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth">
					<Route path="signin" element={<SignIn />}/>
					<Route path="signup" element={<SignUp />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing
