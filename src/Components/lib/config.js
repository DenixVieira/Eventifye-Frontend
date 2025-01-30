import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
	url: "https://eventfye.jpclrocha.dev",
	realm: "events", // Replace with your realm
	clientId: "easy-events", // Replace with your client ID
});

export default keycloak;
