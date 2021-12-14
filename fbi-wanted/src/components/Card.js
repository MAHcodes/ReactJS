const Card = ({ api, title, subject, image }) => {
  return (
    <div>
      <p>{api + title}</p>
      <p>{subject}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
