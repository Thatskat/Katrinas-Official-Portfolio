const Card = ({
  image,
  alt,
  title,
  link,
  tagOne,
  tagTwo,
  tagThree,
  tagFour,
  description,
}) => {
  return (
    <div className="projectCard">
      <img src={image} alt={alt} />
      <p className="cardTitle">
        {title} -{" "}
        <a href={link} target="_blank" rel="noreferrer">
          {alt}
        </a>
      </p>
      <span>
        Tags:{" "}
        <p>
          <span>{tagOne}</span>, <span>{tagTwo}</span>, <span>{tagThree}</span>,{" "}
          <span>{tagFour}</span>
        </p>
      </span>
      <p className="cardDescription">{description}</p>
    </div>
  );
};

export default Card;
