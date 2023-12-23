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
    <div className="grid place-content-center h-full">
      <div className="flex flex-col w-[300px] sm:w-[320px] bg-white rounded-2xl p-5 border border-black shadow-retro gap-2">
        <div className="bg-cover bg-no-repeat bg-center h-[180px] rounded-2xl mb-3" style={{backgroundImage: `url(${card.cover})`}}></div>
        <h3 className="py-2 px-2 text-xs/3 text-black font-bold bg-yellow w-[68px] h-[26px] text-center rounded-md font-theme">{card.category}</h3>
        <p className="text-xs font-bold font-theme">
          Published {card.publishedDay} {monthFormat(card.publishedMonth)}{" "}
          {card.publishedYear}
        </p>
        <h1 className="text-lg font-theme font-extrabold">{card.title}</h1>
        <p className="text-xs font-theme text-grey pb-3">{card.description}</p>
        <div className="flex flex-row items-center gap-3">
          <img src={card.authorPhoto} alt={card.author} className="w-[28px]"/>
          <h3 className="text-xs font-extrabold font-theme">{card.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
