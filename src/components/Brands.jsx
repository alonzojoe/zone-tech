import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GoogleLogo from "../assets/images/G.png";
import NetflixLogo from "../assets/images/net.png";
import AirbnbLogo from "../assets/images/air.png";
import AmazonLogo from "../assets/images/amazon.png";
import FacebookLogo from "../assets/images/fb.png";
import GrabLogo from "../assets/images/grab.png";
const Brands = () => {
  return (
    <section>
      <div className="container py-14 md:py-24">
        <div className="flex justify-center items-center gap-4">
          <FaChevronLeft className="text-primary text-2xl" />
          <p className="text-2xl font-semibold text-center">
            Trusted by <span className="text-secondary">100+ Companies</span>{" "}
            Worldwide
          </p>
          <FaChevronRight className="text-primary text-2xl" />
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-6 py-14 space-y-4 lg:space-y-0">
          <div className="flex items-center justify-center">
            <img
              src={GoogleLogo}
              alt="google-logo"
              className="h-auto w-[151px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={NetflixLogo}
              alt="netflix-logo"
              className="h-auto w-[151px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={AirbnbLogo}
              alt="airbnb-logo"
              className="h-auto w-[151px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={AmazonLogo}
              alt="amazon-logo"
              className="h-auto w-[151px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={FacebookLogo}
              alt="facebook-logo"
              className="h-auto w-[151px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img src={GrabLogo} alt="grab-logo" className="h-auto w-[151px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
