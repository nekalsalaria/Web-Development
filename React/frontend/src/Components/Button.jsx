const Button = ({text, type, disabled}) => {
    return (
        <button type={type} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;