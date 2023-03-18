import "./Button.css"

const Button = (props) => {
    return (
    <button className="buttonNav" onClick={props.callback} >{props.label}</button>
    )
}


export default Button