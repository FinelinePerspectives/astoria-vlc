const SuitesActionButton = ({ action, callback, link, isActive }) => {
    const classes = ['suites__actions--btn'];
    isActive && classes.push('active');

    switch (action) {
        case 'print':
            return (<a href={link} target="_blank" rel="noreferrer">
                <div className={classes.join(' ')} data-action={action} onClick={callback ? () => callback() : null} />
            </a>);
        default:
            return (
                <div className={classes.join(' ')} data-action={action} onClick={callback ? () => callback() : null} />
            );
    }
}

export default SuitesActionButton;