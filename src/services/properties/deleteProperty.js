import propertyData from '../../data/properties.json' assert { type: "json" };

const deleteProperty = (id) => {
    const index = propertyData.properties.findIndex((property) => property.id === id);
  
    if (index === -1) {
      return null;
    }
  
    propertyData.properties.splice(index, 1);
    return id;
  };
  
  export default deleteProperty;