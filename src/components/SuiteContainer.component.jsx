import SuitesActionButton from "./SuitesActionButton.component";

import { useContext, useState, useEffect } from "react";
import { Context } from "../context/context";
import SuiteInfo from "./SuiteInfo.component";
import SuiteFloorplan from "./SuiteFloorplan.component";


const SuiteContainer = ({ suite, isActive, isFavourited }) => {
    const classes = ['suites__container'];
    isActive && classes.push('active');

    const { title, type, sqft, description, floorplan, keyplans } = suite;

    const { toggleFavourite } = useContext(Context);
    
    return (
        <div className={classes.join(' ')}>
            <SuiteInfo section="suites" title={title} type={type} sqft={sqft} description={description} />
            
            <div className="suites__actions">
                <SuitesActionButton action="email" />
                <SuitesActionButton action="favourite" isActive={isFavourited} callback={() => toggleFavourite(suite)} />
                <SuitesActionButton action="print" />
                <SuitesActionButton action="compare" />
                <SuitesActionButton action="virtualtour" />
            </div>

            <SuiteFloorplan floorplan={floorplan} title={title} section="suites" />

            <div className="suites__container--keyplans">
                {keyplans.map((keyplan, i) => <div className="suites__container--keyplan" key={i}>
                    <img src={keyplan} alt="keyplan" />
                </div>)}
            </div>
    </div>
    )
}

export default SuiteContainer;