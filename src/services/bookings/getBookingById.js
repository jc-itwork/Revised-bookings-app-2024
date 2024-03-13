import bookingData from '../../data/bookings.json' assert { type: "json" };

const getBookingById = (id) => {
  return bookingData.bookings.find(booking => booking.id === id);
}

export default getBookingById;