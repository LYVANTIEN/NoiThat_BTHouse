import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "https://www.facebook.com/noithat.bthouse.vn",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/tik-tok.png",
    link: "https://www.tiktok.com/@noithatbthouse",
    width: 20,
  },
  {
    imgSrc: "/assets/footer/zalo3.png",
    link: "https://zalo.me/0787975354",
    width: 35,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Công ty",
    link: [
      "Số 71 Phan trọng tuệ",
      "khu dân cư Diệu Hiền",
      "quận Cái Răng",
      "TP. Cần Thơ",
    ],
  },
  {
    id: 2,
    section: "Liên hệ",
    link: ["Facebook", "Zalo", "078.797.5354", "091.347.7124"],
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Image src="/logo.jpg" alt="logo" width={214} height={66} />
          </div>
          <h2 className="text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16">
            {" "}
            Uy tín - chất lượng - lắng nghe <br /> Liên hệ ngay để được tư vấn
            trực tiếp.
          </h2>
        </div>

        {/* CLOUMN-2/3/4 */}

        {products.map((product) => (
          <div key={product.id} className="sm:col-span-3">
            <p className="text-black text-lg font-medium mb-9">
              {product.section}
            </p>
            <ul>
              {product.link.map((link: string, index: number) => (
                <li key={index} className="mb-5">
                  <Link
                    href="/"
                    className="text-darkgray text-base font-normal mb-6 space-links"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center pb-7.5">
        {socialLinks.map((items, i) => (
          <Link href={items.link} key={i}>
            <div className="bg-white h-[80px] w-[80px] shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-[#A46119]" style={{ marginLeft: '50px' }}>
              <Image
                src={items.imgSrc}
                alt={items.imgSrc}
                width={items.width}
                height={2}
                className="sepiaa"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* All Rights Reserved */}

      <div className="pt-[-100px] py-10 md:flex items-center justify-between border-t border-t-gray-blue">
        <h4 className="text-dark-red opacity-75 text-sm text-center md:text-start font-normal">
          @2024.Nội thất BT House
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/" target="_blank">
              Privacy policy
            </Link>
          </h4>
          <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/" target="_blank">
              Terms & conditions
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
