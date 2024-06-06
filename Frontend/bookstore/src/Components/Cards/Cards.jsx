import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-4 ">
      <div className="card w-80 h-100 bg-base-100 shadow-xl rounded-md hover:scale-105 duration-200 transition-all ease-in  dark:bg-slate-900 dark:text-white dark:border ">
        <figure>
          <img
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body" style={{
            height:"12rem"
        }}>
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between ">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge-outline cursor-pointer  px-2 py-1 rounded-full  dark:border bg-pink-400 hover:bg-pink-500 hover:text-white duration-200 dark:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
