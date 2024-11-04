"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession:
      "Tư vấn và khảo sát trực tiếp, trao đổi và thiết kế theo nhu cầu của khách hàng. Trao đổi và đưa ra báo giá cụ thể.",
    name: "Tư vấn thiết kế",
    imgSrc: "/assets/mentor/tuvan.jpg",
  },
  {
    profession:
      "Sau khi khách hàng đã chốt thiết kế bắt đầu triển khai thi công sản phẩm và lắp đặt tận nơi.",
    name: "Thi công và lắp đặt",
    imgSrc: "/assets/mentor/thicong.jpg",
  },
  {
    profession:
      "Các sản phẩm được làm ra từ nội thất BT House sẽ được bảo hành từ 1 đến 2 năm, 2 năm bảo hành đối với nội thất nhà cửa.",
    name: "Bàn giao và bảo hành",
    imgSrc: "/assets/mentor/bangiao.jpg",
  },
  // {
  //     profession: 'Senior UX Designer',
  //     name: 'Shoo Thar Mien',
  //     imgSrc: '/assets/mentor/user3.png',
  // },
  // {
  //     profession: 'Senior UX Designer',
  //     name: 'Shoo Thar Mien',
  //     imgSrc: '/assets/mentor/user2.png',
  // },
  // {
  //     profession: 'Senior UX Designer',
  //     name: 'Shoo Thar Mien',
  //     imgSrc: '/assets/mentor/user1.png',
  // },
];

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 4000,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      autoplaySpeed: 4500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 530,
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
      <div className="py-10 sm:py-24 " id="mentor">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative">
          <h2 className="lh-82 text-[#A46119] text-4xl md:text-55xl text-center md:text-start font-semibold font-roboto">
            Quy trình làm việc <br /> BT House
          </h2>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="m-3 py-14 md:my-10 text-center">
                  <div className="relative">
                    <Image
                      src={items.imgSrc}
                      alt="user-image"
                      width={306}
                      height={306} // Đặt cả chiều rộng và chiều cao để ảnh có dạng tròn
                      className="inline-block m-auto rounded-full" // Thêm lớp rounded-full
                    />
                    <div className="absolute right-[82px] bottom-[12px] bg-white rounded-full p-4">
                      <Image
                        src="/logo.jpg"
                        alt="logo-image"
                        width={25}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="mt-10 ">
                    <h3 className="text-2xl font-semibold text-lightblack font-roboto">
                      {items.name}
                    </h3>
                    <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50 font-roboto">
                      {items.profession}
                    </h4>
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
