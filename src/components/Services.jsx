import { FaShopify } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
import BoxLeft from "../assets/images/box-left.png";
import CircRight from "../assets/images/circ-right.png";

const Services = () => {
  return (
    <section>
      <div className="container py:14">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-primary py-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lighter text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-24 space-y-8 md:space-y-0">
          <div className="relative z-0">
            <div className="flex flex-col bg-white items-center justify-center p-4 px-7 space-y-8 rounded-xl relative z-20 border-[1px] border-transparent hover:border-barrier">
              <div className="h-[100px] w-[100px] bg-primary rounded-full flex items-center justify-center absolute z-30 -top-14">
                <FaShopify className="text-white text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold pt-5">
                Shopify Development
              </h3>
              <p className="text-center text-lighter">
                “ Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s. Lorem. “
              </p>
              <div className="pb-4">
                <button className="secondary-btn">Read more</button>
              </div>
            </div>
            <img
              src={BoxLeft}
              alt="box-left"
              className="absolute -bottom-5 -left-10 w-[198px] h-auto"
            />
          </div>
          <div className="relative z-0">
            <div className="flex flex-col bg-white items-center justify-center relative p-4 px-7 space-y-8 rounded-xl z-20 border-[1px] border-transparent hover:border-barrier">
              <div className="h-[100px] w-[100px] bg-secondary rounded-full flex items-center justify-center absolute z-30 -top-14">
                <BsRocketTakeoffFill className="text-white text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold pt-5">Digital Marketing</h3>
              <p className="text-center text-lighter">
                “ Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s. Lorem. “
              </p>
              <div className="pb-4">
                <button className="secondary-btn">Read more</button>
              </div>
            </div>
            <img
              src={CircRight}
              alt="circle-right"
              className="absolute -top-10 -right-20 w-[156.44] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
