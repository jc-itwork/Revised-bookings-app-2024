import userData from "../../data/users.json" assert { type: "json" };

const deleteUser = (id) => {
    const index = userData.users.findIndex((user) => user.id === id);
  
    if (index === -1) {
      return null;
    }
  
    userData.hosts.splice(index, 1);
    return id;
  };
  
  export default deleteUser;
  