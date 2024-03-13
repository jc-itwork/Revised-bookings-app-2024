import express from "express";
import getBookings from "../services/bookings/getBookings.js";
import createBooking from "../services/bookings/createBooking.js";
import getBookingById from "../services/bookings/getBookingById.js";
import deleteBooking from "../services/bookings/deleteBooking.js";
import updateBookingById from "../services/bookings/updateBookingById.js";
// import authMiddleware from '../middleware/auth.js';
import authMiddleware from '../middleware/advancedAuth.js';

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const { totalPrice, bookingStatus } = req.query;
    const bookings = getBookings(totalPrice, bookingStatus);
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Something went wrong while getting list of bookings!");
  }
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const booking = getBookingById(id);

    if (!booking) {
      res.status(404).send(`Booking with id ${id} was not found!`);
    } else {
      res.status(200).json(booking);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting book by id!");
  }
});

router.put("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    } = req.body;
    const updatedBooking = updateBookingById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );
    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while updating book by id!");
  }
});

router.post("/", authMiddleware, (req, res) => {
  const {
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  } = req.body;
  const newBooking = createBooking(
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus
  );
  res.status(201).json(newBooking);
});

router.delete("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookingId = deleteBooking(id);

    if (!deletedBookingId) {
      res.status(404).send(`Booking with id ${id} was not found!`);
    } else {
      res.status(200).json({
        message: `Booking with id ${deletedBookingId} was deleted!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while deleting booking by id!");
  }
});

export default router;
