import FloorKeyplan from '../assets/images/keyplan.png';
import FloorplateLowerLevel from '../assets/floorplates/floorplate-lower-level.svg';
import FloorplateGround from '../assets/floorplates/floorplate-ground.svg';
import FloorplateLevelTwo from '../assets/floorplates/floorplate-floor-2.svg';
import FloorplateLevelThreeFourFive from '../assets/floorplates/floorplate-floor-3-5.svg';
import FloorplateLevelSixSevenEight from '../assets/floorplates/floorplate-floor-6-8.svg';

export const floors = [
    { id: 'lowerLevel', label: 'Lower Level', floorplate: FloorplateLowerLevel, keyplan: FloorKeyplan },
    { id: 'groundFloor', label: 'Ground Floor', floorplate: FloorplateGround, keyplan: FloorKeyplan },
    { id: 'floorTwo', label: 'Floor Two', floorplate: FloorplateLevelTwo, keyplan: FloorKeyplan },
    { id: 'floorsThreeFourFive', label: 'Floors 3 - 5', floorplate: FloorplateLevelThreeFourFive, keyplan: FloorKeyplan },
    { id: 'floorsSixSevenEight', label: 'Floors 6 - 8', floorplate: FloorplateLevelSixSevenEight, keyplan: FloorKeyplan },
];