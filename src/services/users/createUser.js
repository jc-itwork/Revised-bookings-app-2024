import userData from "../../data/users.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createUser = (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  const newUser = {
    id: uuid(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture
  };

  userData.users.push(newUser);
  return newUser;
};

export default createUser;
