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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-14">
          <div className="flex flex-col bg-red items-center opcaity-100 justify-center relative p-4 px-7 space-y-8 rounded-xl border-[1px] border-green-500 z-10">
            <h3 className="text-2xl font-semibold">Shopify Development</h3>
            <p className="text-center text-lighter">
              “ Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. Lorem. “
            </p>
            <div>
              <button className="primary-btn">Read more</button>
            </div>
            <img
              src={BoxLeft}
              alt="box-left"
              className="absolute -bottom-5 -left-10 -z-10"
            />
          </div>
          <div className="flex flex-col items-center justify-center relative p-4 px-7 space-y-8  rounded-xl border-[1px] border-blue-500">
            <h3 className="text-2xl font-semibold">Digital Marketing</h3>
            <p className="text-center text-lighter">
              “ Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. Lorem. “
            </p>
            <div>
              <button className="primary-btn">Read more</button>
            </div>
            {/* <img src={CircRight} alt="circle-right" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
