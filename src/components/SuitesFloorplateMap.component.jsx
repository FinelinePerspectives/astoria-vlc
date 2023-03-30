import { useContext } from 'react';
import { Context } from '../context/context';

const SuitesFloorplateMap = ({ id, setPopupActive }) => {
    const { setActiveSuite } = useContext(Context);

    const handleAreaClick = (e, id) => {
        e.preventDefault();
        setActiveSuite(id);
        setPopupActive(true);
    }

    switch (id) {
        case 'lowerLevel':
            return (<map id="lowerLevel" name="lowerLevel">
                <area title="C3" alt =""coords="1333,1619,1252,1697" shape="rect" onClick={(e) => handleAreaClick(e, 'C3')}></area>
            </map>);
    
        default:
            return <map id="floor" name="floor"></map>
    }
}

export default SuitesFloorplateMap;