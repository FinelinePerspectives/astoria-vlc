const SuiteKeyplan = ({ keyplan, callback, section }) => (
    <div className="suites__keyplan" onClick={() => callback()} data-section={section}>
        <img src={keyplan} alt="" />
    </div>
)

export default SuiteKeyplan;