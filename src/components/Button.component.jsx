const Button = ({ type, copy, callback, isActive }) => {
    const classes = ['btn'];
    type === 'section' && classes.push('btn-section')
    isActive && classes.push('active');

    switch (type) {
        case 'section':
            return <button className={classes.join(' ')} onClick={callback && callback}>{copy}</button>
    
        default:
            return <button className={classes.join(' ')} onClick={callback && callback}>{copy}</button>
    }
}

export default Button;