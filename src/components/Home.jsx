import HeroImg from "../assets/images/hero.png";
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
