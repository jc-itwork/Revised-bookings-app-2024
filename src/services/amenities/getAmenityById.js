import amenityData from '../../data/amenities.json' assert { type: 'json' };

const getAmenityById = (id) => {
  return amenityData.amenities.find(amenity => amenity.id === id);
}

export default getAmenityById;