import "./container.css"

export const Container = (props) => {
  return (
    <div className={`pages ${props.customClass}`}>{props.children}</div>
  )
}
