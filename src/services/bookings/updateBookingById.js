import bookingData from '../../data/bookings.json' assert { type: "json" };

const updateBookingById = (
    id,
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus) => {
  const booking = bookingData.bookings.find(booking => booking.id === id);

  if (!booking) {
    throw new Error(`Booking with id ${id} was not found!`);
  }
  booking.userId = userId ?? booking.userId;
  booking.propertyId = propertyId ?? booking.propertyId;
  booking.checkinDate = checkinDate ?? booking.checkinDate;
  booking.checkoutDate = checkoutDate ?? booking.checkoutDate;
  booking.numberOfGuests = numberOfGuests ?? booking.numberOfGuests;
  booking.totalPrice = totalPrice ?? booking.totalPrice;
  booking.bookingStatus = bookingStatus ?? booking.bookingStatus;

  return booking;
}

export default updateBookingById;