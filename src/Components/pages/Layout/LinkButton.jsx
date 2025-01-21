import { Link } from "react-router-dom"
import "./linkbutton.css"

export const LinkButton = ({to, text, customClass}) => {
  return (
    <Link to={to}><button className={(customClass?`${customClass}`:'btn')}>{text}</button></Link>
  )
}
