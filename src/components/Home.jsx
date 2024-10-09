import { FaStar } from "react-icons/fa6";
import HeroImg from "../assets/images/hero.png";
import customerOne from "../assets/images/rev1.png";
import customerTwo from "../assets/images/rev2.png";
import customerThree from "../assets/images/rev3.png";
const Home = () => {
  return (
    <section className="bg-light overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[632px]">
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-10 lg:max-w-[505px]">
            <h1 className="text-primary text-5xl lg:text-6xl font-bold !leading-snug">
              Create Your Success{" "}
              <span className="text-secondary">Business</span>
            </h1>
            <p className="text-3xl text-lighter">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been...
            </p>
            <div>
              <button className="primary-btn drop-shadow">Explore</button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="flex">
                <img
                  src={customerOne}
                  alt="customer-1"
                  className="w-[60px] relative z-10 rounded-full"
                />
                <img
                  src={customerTwo}
                  alt="customer-2"
                  className="w-[60px] relative z-20 -ml-7 rounded-full"
                />
                <img
                  src={customerThree}
                  alt="customer-3"
                  className="w-[60px] relative z-30 -ml-7 rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base font-semibold">Customer Review</h4>
                <div className="flex gap-2 items-center">
                  <FaStar className="text-yellow" />
                  <span className="text-sm">4.8</span>
                  <span className="text-muted">(5k reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={HeroImg}
            alt="hero-main"
            className="w-[400px] xl:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
