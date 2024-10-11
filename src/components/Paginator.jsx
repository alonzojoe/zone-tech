import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
const Paginator = () => {
  return (
    <div className="flex justify-center items-center gap-12">
      <FaChevronLeft className="text-2xl text-primary cursor-pointer hover:scale-150 duration-200" />
      <div className="flex items-center gap-4">
        <FaCircle className="text-foam" />
        <FaCircle className="text-foam" />
        <FaCircle className="text-secondary" />
        <FaCircle className="text-foam" />
        <FaCircle className="text-foam" />
        <FaCircle className="text-foam" />
      </div>
      <FaChevronRight className="text-2xl text-primary cursor-pointer hover:scale-150 duration-200" />
    </div>
  );
};

export default Paginator;
