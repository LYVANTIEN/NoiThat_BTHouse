import Image from "next/image";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightkblue">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            {/* <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</h3>
                        </div> */}
            <h1 className="text-[#A46119] text-4xl sm:text-5xl font-bold font-roboto text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Nội thất BT House làm đẹp cho ngôi nhà của bạn
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Tư vấn - Thiết kế - Thi công nội thất trọn gói.
            </h3>
            <div className="flex gap-2">
              <Image
                src="/assets/banner/call.png"
                alt="check-image"
                width={20}
                height={20}
                className="smallImage"
              />
              <h2 className="text-charcoal text-lg font-bold text-center lg:text-start opacity-75 pt-5 lg:pt-0">
                 078.797.5354 - 091.347.7124
              </h2>
            </div>

            <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0">
              <input
                type="Email address"
                name="q"
                className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black"
                placeholder="Tìm kiếm..."
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                <button
                  type="submit"
                  className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-[#A46119] hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                >
                  <Image
                    src={"/assets/banner/search.svg"}
                    alt="inputicon"
                    width={50}
                    height={60}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/checkbrown.png"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Uy tín
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/checkbrown.png"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Chất lượng
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/checkbrown.png"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Giá tốt
                </p>
              </div>
            </div>
          </div>
          {/* ảnh banner */}
          <div
            className="col-span-6 flex justify-center"
            style={{ marginLeft: "100px" }}
          >
            <Image
              src="/assets/banner/logo.png"
              alt="nothing"
              width={1000}
              height={1200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
