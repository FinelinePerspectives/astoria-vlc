import SuitesActionButton from "./SuitesActionButton.component";

import { useContext, useState, useEffect } from "react";
import { Context } from "../context/context";


const SuiteContainer = ({ suite, isActive, isFavourited }) => {
    const classes = ['suites__container'];
    isActive && classes.push('active');

    const { title, type, sqft, description, floorplan, keyplans } = suite;

    const { toggleFavourite } = useContext(Context);
    
    return (
        <div className={classes.join(' ')}>
            <div className="suites__container--info">
                <p className="suites__container--title">{title}</p>
                <h2 className="suites__container--type">{type}</h2>
                <p className="suites__container--sqft">{sqft} Sq. Ft.</p>
                <span className="suites__container--description">{description}</span>
            </div>
            
            <div className="suites__actions">
                <SuitesActionButton action="email" />
                <SuitesActionButton action="favourite" isActive={isFavourited} callback={() => toggleFavourite(suite)} />
                <SuitesActionButton action="print" />
                <SuitesActionButton action="compare" />
                <SuitesActionButton action="virtualtour" />
            </div>

            <div className="suites__container--floorplan">
                <img src={floorplan} alt={title} />
            </div>

            <div className="suites__container--keyplans">
                {keyplans.map((keyplan, i) => <div className="suites__container--keyplan" key={i}>
                    <img src={keyplan} alt="keyplan" />
                </div>)}
            </div>
    </div>
    )
}

export default SuiteContainer;