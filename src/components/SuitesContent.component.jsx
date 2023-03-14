import SuiteContainer from "./SuiteContainer.component";

const SuitesContent = ({ currentSubsection, suites, activeSuite }) => {
    const classes = ['suites__content'];
    currentSubsection === 'suites' && classes.push('active');

    return (
        <div className={classes.join(' ')} data-subsection="suites">
            <div className="suites__floorplan">
                {suites.length > 0 ? suites.map((suite, i) => <SuiteContainer key={i} suite={suite} isActive={suite.id === activeSuite} />) : <p>Sorry, there are no suites that match your search.</p>}
            </div>
        </div>
    )
}

export default SuitesContent;