import Member1 from "../assets/images/member1.png";
import Member2 from "../assets/images/member2.png";
import Member3 from "../assets/images/member3.png";

import Paginator from "./Paginator";
const Team = () => {
  return (
    <section>
      <div className="container py:14 md:py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-primary py-4">
            Our Master<span className="text-secondary">Brains</span>
          </h2>
          <p className="text-lighter text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 space-y-4 md:space-y-0 py-14">
          <div className="bg-white flex flex-col items-center justify-center p-4 py-7 px-7 space-y-4 rounded-xl border-[1px] border-transparent hover:border-barrier">
            <img src={Member1} alt="member-1" className="h-[145px] w-[145px]" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">John Martinus</h3>
              <p className="text-center text-lighter text-base">CTO</p>
            </div>
            <p className="text-center text-lighter">
              “ Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. Lorem ipsum. “
            </p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center p-4 py-7 px-7 space-y-4 rounded-xl border-[1px] border-transparent hover:border-barrier">
            <img src={Member2} alt="member-1" className="h-[145px] w-[145px]" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-center text-lighter text-base">
                Founder and CEO
              </p>
            </div>
            <p className="text-center text-lighter">
              “ Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. Lorem ipsum. “
            </p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center p-4 py-7 px-7 space-y-4 rounded-xl border-[1px] border-transparent hover:border-barrier">
            <img src={Member3} alt="member-1" className="h-[145px] w-[145px]" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">John Club</h3>
              <p className="text-center text-lighter text-base">
                Marketing Manager
              </p>
            </div>
            <p className="text-center text-lighter">
              “ Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. Lorem ipsum. “
            </p>
          </div>
        </div>
        <Paginator />
      </div>
    </section>
  );
};

export default Team;
