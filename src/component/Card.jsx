import React from "react";


const Card = ({ card }) => {
  const monthFormat = (monthNumber) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthNumber - 1];
  };

  return (
    <div className="">
      <div>
        <img src={card.cover} alt={card.title} />
        <h3>{card.category}</h3>
        <p>
          Published {card.publishedDay} {monthFormat(card.publishedMonth)}{" "}
          {card.publishedYear}
        </p>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        <div>
          <img src={card.authorPhoto} alt={card.author} />
          <h3>{card.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
