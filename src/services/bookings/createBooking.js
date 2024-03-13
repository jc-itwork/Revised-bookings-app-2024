import bookingData from "../../data/bookings.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createBooking =  (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const newBooking = {
    id: uuid(),
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus
  };

  bookingData.bookings.push(newBooking);

  return newBooking;
};

export default createBooking;
