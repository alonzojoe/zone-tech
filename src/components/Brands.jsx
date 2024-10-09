import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Brands = () => {
  return (
    <section>
      <div className="container py-14 md:py-24">
        <div className="flex justify-center items-center gap-4">
          <FaChevronLeft className="text-primary text-2xl" />
          <p className="text-2xl font-semibold">
            Trusted by <span className="text-secondary">100+ Companies</span>{" "}
            Worldwide
          </p>
          <FaChevronRight className="text-primary text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
