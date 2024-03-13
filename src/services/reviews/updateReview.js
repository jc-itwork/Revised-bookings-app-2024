import reviewData from "../../data/reviews.json" assert { type: "json" };

const updateReview = (id, userId, propertyId, rating, comment) => {
  const review = reviewData.reviews.find((review) => review.id === id);

  if (!review) {
    throw new Error(`Review with id ${id} was not found!`);
  }

  review.userId = userId ?? review.userId;
  review.propertyId = propertyId ?? review.propertyId;
  review.rating = rating ?? review.rating;
  review.comment = comment ?? review.comment;

  return review;
};

export default updateReview;
