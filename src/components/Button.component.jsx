const Button = ({ copy, callback }) => {
    return (
        <button className="btn" onClick={callback && callback}>{copy}</button>
    )
}

export default Button;