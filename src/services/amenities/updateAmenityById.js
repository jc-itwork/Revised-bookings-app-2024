import amenityData from '../../data/amenities.json'  assert { type: "json" };

const updateAmenityById = (
    id,
    name
) => {
    const amenity = amenityData.amenities.find(amenity => amenity.id === id);
    if (!amenity) {
        throw new Error(`Amenity with id ${id} was not found!`);
      }
    amenity.name = name ?? amenity.name;

    return amenity;

}

export default updateAmenityById;