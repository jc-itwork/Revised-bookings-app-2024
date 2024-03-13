import reviewData from '../../data/reviews.json' assert { type: "json" };

const getReviewById = (id) => {
  return reviewData.reviews.find(review => review.id === id);
}

export default getReviewById;