import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Components/pages/Routes/Routes";
import { Footer } from "./Components/pages/Layout/Footer";
import {userManager,onSigninCallback} from "./Components/lib/config.js"

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "react-oidc-context";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<AuthProvider
			userManager={userManager}
			onSigninCallback={onSigninCallback}
		>
			<QueryClientProvider client={client}>
				<Router>
					<Routes />
					<Footer />
				</Router>
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default App;
