
const Button = (props) => {
    return (
        <div 
            className={props.className} 
            onClick = {props.onClick} 
            disbaled={props.disbaled}
        >
            {props.children}
            
        </div>
    )
}

export default Button;