import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const Rating = () => {
  const [rating, setRating] = useState(3); 

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex flex-col items-center mt-2">
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="1px"
      />
    </div>
  );
};

export default Rating;
