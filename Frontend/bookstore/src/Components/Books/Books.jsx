import React, { useEffect, useState } from "react";
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../Cards/Cards";
const Books = () => {
  const[book,setBook]= useState([])
  useEffect(()=>{
      const getBook= async()=>{
          try {
              const res= await axios.get("http://localhost:4001/book")
              console.log(res.data)
              setBook(res.data)
          } catch (error) {
              console.log(error)
          }
      }
      getBook();
  },[])
  const filterData = book.filter((d) => d.category === "free");
  // console.log(filterData)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
        },
      },
    ],
  };
  return (
    <section>
      <div className="books-container max-w-screen-2xl container mx-auto md:px-20 px-4  " >
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptatum repudiandae ex, aliquam exercitationem odit rerum
            veritatis quam perferendis officiis, facilis quae nesciunt?
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Books;
