"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  price: string;
  rating: string;
}

const postData: DataType[] = [
  {
    heading: "Phòng ngủ hiện đại",
    heading2: "Tư vấn thiết kế",
    name: "BT House",
    imgSrc: "/assets/courses/1.jpg",
    price: "Liên hệ",
    rating: "078.797.5354 - 091.347.7124",
  },
  {
    heading: "Phòng ngủ hiện đại",
    heading2: "Tư vấn thiết kế",
    name: "BT House",
    imgSrc: "/assets/courses/2.jpg",
    price: "Liên hệ",
    rating: "078.797.5354 - 091.347.7124",
  },
  {
    heading: "Phòng ngủ hiện đại",
    heading2: "Tư vấn thiết kế",
    name: "BT House",
    imgSrc: "/assets/courses/3.jpg",
    price: "Liên hệ",
    rating: "078.797.5354 - 091.347.7124",
  },
  {
    heading: "Phòng ngủ hiện đại",
    heading2: "Tư vấn thiết kế",
    name: "BT House",
    imgSrc: "/assets/courses/4.jpg",
    price: "Liên hệ",
    rating: "078.797.5354 - 091.347.7124",
  },
  {
    heading: "Phòng ngủ hiện đại",
    heading2: "Tư vấn thiết kế",
    name: "BT House",
    imgSrc: "/assets/courses/5.jpg",
    price: "Liên hệ",
    rating: "078.797.5354 - 091.347.7124",
  },
  {
    heading: "Phòng ngủ hiện đại",
    heading2: "Tư vấn thiết kế",
    name: "BT House",
    imgSrc: "/assets/courses/6.jpg",
    price: "Liên hệ",
    rating: "078.797.5354 - 091.347.7124",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div id="courses">
        <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
          <div className="sm:flex justify-between items-center">
            <h3 className="text-[#A46119] text-4xl lg:text-55xl font-bold font-roboto mb-5 sm:mb-0">
              Các thiết kế thịnh hành
            </h3>
            <Link
              href={"/"}
              className="text-Blueviolet text-lg font-medium space-links"
            >
              Xem thêm thiết kế&nbsp;&gt;&nbsp;
            </Link>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 font-roboto shadow-courses rounded-2xl">
                  <div className="relative rounded-3xl">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={389}
                      height={262}
                      className="m-auto clipPath fixed-size"
                    />
                    <div className="absolute right-5 -bottom-2 bg-[#A46119] rounded-full p-6">
                      <h3 className="text-white uppercase text-center text-sm font-medium">
                        Thịnh <br /> hành
                      </h3>
                    </div>
                  </div>

                  <div className="px-3">
                    <h4 className="text-2xl font-bold pt-6 text-black">
                      {items.heading}
                    </h4>
                    <h4 className="text-2xl font-bold pt-1 text-black">
                      {items.heading2}
                    </h4>

                    <div>
                      <h3 className="text-base font-normal pt-6 opacity-75">
                        {items.name}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center py-6">
                      <div>
                      <Image
                src="/assets/banner/call.png"
                alt="check-image"
                width={20}
                height={20}
                className="smallImage"
              />
                      </div>
                      <div className="flex gap-4">
                        <h3 className="text-[#A46119] text-22xl font-medium">
                          {items.rating}
                        </h3>
                      </div>
                    </div>

                    <hr style={{ color: "#C4C4C4" }} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
