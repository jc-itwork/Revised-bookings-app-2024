import propertyData from "../../data/properties.json" assert { type: "json" };

const updatePropertyById = (
  id,
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  const property = propertyData.properties.find(
    (property) => property.id === id
  );

  if (!property) {
    throw new Error(`Property with id ${id} was not found!`);
  }

  property.title = title ?? property.title;
  property.description = description ?? property.description;
  property.location = location ?? property.location;
  property.pricePerNight = pricePerNight ?? property.pricePerNigh;
  property.bedroomCount = bedroomCount ?? property.bedroomCount;
  property.bathRoomCount = bathRoomCount ?? property.bathRoomCount;
  property.maxGuestCount = maxGuestCount ?? property.maxGuestCount;
  property.hostId = hostId ?? property.hostId;
  property.rating = rating ?? property.rating;
};

export default updatePropertyById;
