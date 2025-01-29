import { Link } from "react-router-dom";
import "./linkbutton.css";

export const LinkButton = ({ to, text, customClass, onClick }) => {
	return (
		<Link to={to} onClick={onClick}>
			<button className={customClass ? `${customClass}` : "btn"}>
				{text}
			</button>
		</Link>
	);
};
