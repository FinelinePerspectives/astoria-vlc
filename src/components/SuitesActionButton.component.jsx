const SuitesActionButton = ({ action, callback, link, isActive, disable }) => {
    const classes = ['suites__actions--btn'];
    disable && classes.push('disable');
    isActive && classes.push('active');

    if (disable) {
        return <div className={classes.join(' ')} data-action={action} /> 
    }

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