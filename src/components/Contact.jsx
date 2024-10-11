import ContactImg from "../assets/images/Contact.png";
const Contact = () => {
  return (
    <section className="bg-light overflow-hidden">
      <div className="container py-14 md:py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-primary py-4">
            Contact <span className="text-secondary">us</span>
          </h2>
          <p className="text-lighter text-lg text-center">
            Please get in touch and our expert support team will answer all your
            questions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 space-y-4 md:space-y-0 gap-8">
          <div className="flex justify-center items-center relative z-20">
            <div className="flex flex-col justify-center items-center relative z-10">
              <img
                src={ContactImg}
                alt="contact-image"
                className="w-[450px] md:w-[612px] object-cover"
              />
            </div>
          </div>
          <form className="flex flex-col justify-center gap-6">
            <input
              type="text"
              className="w-full bg-white rounded-lg text-xl p-5 py-6 border-[2px] border-lightBarrier placeholder:text-lightBarrier focus:outline-none focus:border-secondary focus:ring-0"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full bg-white rounded-lg text-xl p-5 py-6 border-[2px] border-lightBarrier placeholder:text-lightBarrier focus:outline-none focus:border-secondary focus:ring-0"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-full bg-white rounded-lg text-xl p-5 py-6 border-[2px] border-lightBarrier placeholder:text-lightBarrier focus:outline-none focus:border-secondary focus:ring-0"
              placeholder="Subject"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-white rounded-lg resize-none h-40 text-xl p-5 py-6 border-[2px] border-lightBarrier placeholder:text-lightBarrier focus:outline-none focus:border-secondary focus:ring-0"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
