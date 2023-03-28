import SuitesActionButton from '../components/SuitesActionButton.component';
import { useState, useEffect } from 'react';

const PropertyTourSeasonalSunlight = ({ isActive }) => {
    const [currentDirection, setCurrentDirection] = useState('north');
    const [currentSeason, setCurrentSeason] = useState('spring');

    const [currentImage, setCurrentImage] = useState('00001');

    const [urlKey, setUrlKey] = useState(`${currentDirection}${currentSeason}`);

    const classes = ['propertyTour__section'];
    isActive && classes.push('active');

    const pad = (num, size) => {
        var s = "00000" + num;
        return s.substring(s.length-size);
    }

    const handleRangeChange = (e) => {
            const val = pad(e.target.value, 5);
            setCurrentImage(val);
    }

    const resetIndex = () => setCurrentImage('00001');

    const handleUrlKeyChange = () => {
        const str = `${currentDirection}${currentSeason}`;
        const key = keys.find(k => k.key  === str);
        setUrlKey(key.id);
    }

    useEffect(() => {
        resetIndex();
        handleUrlKeyChange();
    }, [currentDirection]);

    useEffect(() => {
        resetIndex();
        handleUrlKeyChange();
    }, [currentSeason]);

    const keys = [
        { id: 'SS_1_March_NorthEast_denoised_ocl', key: "northspring" },
        { id: 'SS_1_March_NorthWest_denoised_ocl', key: "westspring" },
        { id: 'SS_1_March_SouthEast_denoised_ocl', key: "eastspring" },
        { id: 'SS_1_March_SouthWest_denoised_ocl', key: "southspring" },
        { id: 'SS_2_June_NorthEast_denoised_ocl', key: "northsummer" },
        { id: 'SS_2_June_NorthWest_denoised_ocl', key: "westsummer" },
        { id: 'SS_2_June_SouthEast_denoised_ocl', key: "eastsummer" },
        { id: 'SS_2_June_SouthWest_denoised_ocl', key: "southsummer" },
        { id: 'SS_3_September_NorthEast_denoised_ocl', key: "northfall" },
        { id: 'SS_3_September_NorthWest_denoised_ocl', key: "westfall" },
        { id: 'SS_3_September_SouthEast_denoised_ocl', key: "eastfall" },
        { id: 'SS_3_September_SouthWest', key: "southfall" },
        { id: 'SS_4_December_NorthEast_denoised_ocl', key: "northwinter" },
        { id: 'SS_4_December_NorthWest_denoised_ocl', key: "westwinter" },
        { id: 'SS_4_December_SouthEast_denoised_ocl', key: "eastwinter" },
        { id: 'SS_4_December_SouthWest_denoised_ocl', key: "southwinter" }
    ];

    return (
        <div className={classes.join(' ')} data-section="seasonalsunlight">
            <div className="propertyTour__seasonalSunlight--image">
                <img src={`https://finelineperspectives.dev/astoria/sunStudy/${urlKey}/${urlKey}_${currentImage}.jpg`} alt="" />
            </div>

            <div className="propertyTour__seasonalSunlight--menu" data-menu="directions">
                <SuitesActionButton action="north" callback={() => setCurrentDirection('north')} isActive={currentDirection === 'north'} />
                <SuitesActionButton action="east" callback={() => setCurrentDirection('east')} isActive={currentDirection === 'east'} />
                <SuitesActionButton action="south" callback={() => setCurrentDirection('south')} isActive={currentDirection === 'south'} />
                <SuitesActionButton action="west" callback={() => setCurrentDirection('west')} isActive={currentDirection === 'west'} />
            </div>

            <div className="propertyTour__seasonalSunlight--control">
                <input step="2" type="range" min={1} max={100} onChange={(e) => handleRangeChange(e)} value={currentImage} />
            </div>

            <div className="propertyTour__seasonalSunlight--menu" data-menu="seasons">
                <SuitesActionButton action="spring" callback={() => setCurrentSeason('spring')} isActive={currentSeason === 'spring'}/>
                <SuitesActionButton action="summer" callback={() => setCurrentSeason('summer')} isActive={currentSeason === 'summer'}/>
                <SuitesActionButton action="fall" callback={() => setCurrentSeason('fall')} isActive={currentSeason === 'fall'}/>
                <SuitesActionButton action="winter" callback={() => setCurrentSeason('winter')} isActive={currentSeason === 'winter'}/>
            </div>
        </div>
    )
}

export default PropertyTourSeasonalSunlight;