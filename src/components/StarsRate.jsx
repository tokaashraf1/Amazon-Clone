const StarsRate = ({rating}) => {
  const roundedRating = Math.round(rating);
  console.log(roundedRating); 
  return (
    <div className="flex">
      {[...Array(5)].map((_, key) => (
        <span key={key}>
          {key < roundedRating ? (
            <i class="fa-solid fa-star yellow"></i>
          ) : (
            <i class="fa-regular fa-star yellow"></i>
          )}
        </span>
      ))}
    </div>
  );
};

export default StarsRate;
