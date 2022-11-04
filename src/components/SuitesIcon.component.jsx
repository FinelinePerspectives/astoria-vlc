const SuitesIcon = ({ suite }) => {
    const { id, dataBG } = suite;

    return (
        <div className="suites__icon" data-bg={dataBG}>
            <p>{id}</p>
        </div>
    )
}

export default SuitesIcon;