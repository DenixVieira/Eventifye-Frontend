import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Components/lib/config.js";

createRoot(document.getElementById("root")).render(
	<ReactKeycloakProvider
		authClient={keycloak}
		initOptions={{
			onLoad: "check-sso",
			silentCheckSsoRedirectUri:
				window.location.origin + "/silent-check-sso.html",
		}}
	>
		<StrictMode>
			<App />
		</StrictMode>
		,
	</ReactKeycloakProvider>
);
