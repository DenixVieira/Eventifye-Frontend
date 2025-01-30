import { Container } from "../Layout/Container";
import { Navbar } from "../Layout/Navbar";
import { useAuth } from "react-oidc-context";

export const PrivateRoute = ({ element }) => {
	const { isAuthenticated, signinRedirect,user } = useAuth();
	return isAuthenticated ? (
		<>
			<Navbar />
			<Container customClass='min_height'>{element}</Container>
		</>
	) : (
		<p>HEHE</p>
		// signinRedirect()
	);
};
