import amenityData from '../../data/amenities.json' assert { type: "json" };
import {v4 as uuid} from 'uuid';


const createAmenity = (
   name
  ) => {
    const newAmenity = {
      id: uuid(),
      name
    };
  
    amenityData.amenities.push(newAmenity);
    return newAmenity;
  };
  
  export default createAmenity;
  