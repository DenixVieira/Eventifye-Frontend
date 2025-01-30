import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Components/pages/Routes/Routes";
import { Footer } from "./Components/pages/Layout/Footer";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { api } from "./Components/lib/api";
import { Loader } from "./Components/pages/Layout/Loader";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	const { keycloak, initialized } = useKeycloak();

	useEffect(() => {
		if (
			!Object.keys(api.defaults.headers).includes("Authorization") &&
			initialized
		) {
			api.defaults.headers.Authorization = `Bearer ${keycloak.idToken}`;
		}
	}, [initialized, keycloak.idToken]);

	if (initialized) {
		return (
			<QueryClientProvider client={client}>
				<Router>
					<Routes />
					<Footer />
				</Router>
			</QueryClientProvider>
		);
	}

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Loader />
		</div>
	);
}

export default App;
