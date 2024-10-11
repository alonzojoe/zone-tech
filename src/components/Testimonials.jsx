import TestimonialsImg from "../assets/images/testimonials.png";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="bg-light overflow-hidden">
      <div className="container py-14 md:py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-primary py-4">
            Case Studies{" "}
            <span className="text-secondary">and Testimonials</span>
          </h2>
          <p className="text-lighter text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-14 space-y-8 md:space-y-0">
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left  space-y-12">
              <h2 className="text-4xl text-primary font-semibold">
                What They Say?
              </h2>
              <p className="text-lighter text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="text-lighter text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
              <p className="text-lighter text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center relative z-20">
            <div className="flex flex-col justify-center items-center relative z-10">
              <img src={TestimonialsImg} alt="testimonials-hero" className="" />
            </div>
            <div className="absolute -bottom-20 left-32 z-20">
              <div className="rounded-2xl bg-white border-[1px] p-6 border-barrier relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-4 bg-secondary rounded-l-2xl"></div>
                <div className="ml-4">
                  <p className="text-lightest text-md border-l-2 px-3 border-barrier">
                    “ Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy. “
                  </p>
                  <div className="flex justify-between items-center py-5">
                    <div>
                      <h5 className="text-lg font-semibold">Sophia Isabella</h5>
                      <p className="text-lightest text-lg">Customer</p>
                    </div>
                    <div>
                      <div className="flex gap-1">
                        <FaStar className="text-yellow text-lg" />
                        <FaStar className="text-yellow text-lg" />
                        <FaStar className="text-yellow text-lg" />
                        <FaStar className="text-yellow text-lg" />
                        <FaStar className="text-yellow text-lg" />
                      </div>
                      <p className="text-lightest text-lg">
                        12 reviews at Yelp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
