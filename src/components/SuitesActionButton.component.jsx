const SuitesActionButton = ({ action, callback, isActive }) => {
    const classes = ['suites__actions--btn'];
    isActive && classes.push('active');

    return (
        <div className={classes.join(' ')} data-action={action} onClick={callback ? () => callback() : null} />
    )
}

export default SuitesActionButton;