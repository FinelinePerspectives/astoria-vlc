import Floorplan from '../assets/images/floorplan.png';

import Keyplan1 from '../assets/images/suiteskeyplan1.png';
import Keyplan2 from '../assets/images/suiteskeyplan2.png';
import Keyplan3 from '../assets/images/suiteskeyplan3.png';


export const suitesData = [
    {
        id: "C1",
        title: 'C1 Unit Merry',
        type: '1 Bed + Den',
        sqft: '740',
        description: '+ 107 Sq. Ft. w/Balcony 747 Sf. Ft.',
        floorplan: Floorplan,
        keyplans: [
            Keyplan1,
            Keyplan2,
            Keyplan3
        ],
        numOfBeds: 'onebedroom',
        sqftRange: '700799',
        numOfBaths: 'onebathroom',
        hasDen: false,
        hasBalcony: true,
        hasEnsuite: false,
        hasWalkInCloset: true,
        isAccessible: false,
        hasVirtualTour: false,
        dataBG: 'lightgrey'
    },
    {
        id: "C2",
        title: 'C1 Unit Merry',
        type: '1 Bed + Den',
        sqft: '840',
        description: '+ 107 Sq. Ft. w/Balcony 747 Sf. Ft.',
        floorplan: Floorplan,
        keyplans: [
            Keyplan1,
            Keyplan2,
            Keyplan3
        ],
        numOfBeds: 'twobedroom',
        sqftRange: '800899',
        numOfBaths: 'twobathroom',
        hasDen: true,
        hasBalcony: true,
        hasEnsuite: false,
        hasWalkInCloset: true,
        isAccessible: true,
        hasVirtualTour: false,
        dataBG: 'purple'
    },
    {
        id: "C3",
        title: 'C1 Unit Merry',
        type: '1 Bed + Den',
        sqft: '640',
        description: '+ 107 Sq. Ft. w/Balcony 747 Sf. Ft.',
        floorplan: Floorplan,
        keyplans: [
            Keyplan1,
            Keyplan2,
            Keyplan3
        ],
        numOfBeds: '1bed',
        sqftRange: '600699',
        numOfBaths: 'twobedroomden',
        hasDen: true,
        hasBalcony: false,
        hasEnsuite: true,
        hasWalkInCloset: false,
        isAccessible: true,
        hasVirtualTour: true,
        dataBG: 'gold'
    }
]
