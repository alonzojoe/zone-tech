import CultureImg from "../assets/images/culture.png";

const Culture = () => {
  return (
    <section className="bg-light overflow-hidden">
      <div className="container py-0 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 py-14 space-y-8 md:space-y-0">
          <div className="flex justify-center items-center relative z-20">
            <div className="flex flex-col justify-center items-center relative z-10">
              <img
                src={CultureImg}
                alt="testimonials-hero"
                className="w-[450px] md:w-[612px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left  space-y-12">
              <h2 className="text-4xl text-primary font-semibold">
                Culture of <span className="text-secondary">Our Company</span>
              </h2>
              <p className="text-lighter text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </p>
              <p className="text-lighter text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
