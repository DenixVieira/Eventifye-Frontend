import { useKeycloak } from "@react-keycloak/web";
import { Container } from "../Layout/Container";
import { Navbar } from "../Layout/Navbar";

export const PrivateRoute = ({ element }) => {
	const { keycloak } = useKeycloak();
	return keycloak.authenticated ? (
		<>
			<Navbar />
			<Container customClass='min_height'>{element}</Container>
		</>
	) : (
		keycloak.login()
	);
};
