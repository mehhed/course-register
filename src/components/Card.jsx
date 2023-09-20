import { HiOutlineBookOpen } from "react-icons/hi";

const Card = ({ eachCardData, addToChartFunction }) => {
  console.log(eachCardData);
  const { cover, title, details, price, credit, unique_id } = eachCardData;
  return (
    <div className="max-w-[312px] rounded-xl p-4 bg-white">
      <div>
        <img className="w-full" src={cover} alt="" />
      </div>
      {/* card body  */}
      <div>
        <h1 className="text-lg font-semibold my-4">{title}</h1>
        <p className="font-normal text-sm text-[#1C1B1B99]">{details}</p>
        <div className="flex justify-between my-4 items-center">
          <div>
            $
            <span className="text-base font-medium text-[#1C1B1B99] ml-3">
              Price : {price}
            </span>
          </div>
          <div>
            <span className="text-base font-medium text-[#1C1B1B99] flex items-center gap-3">
              <HiOutlineBookOpen></HiOutlineBookOpen>{" "}
              <span>Cradiv : {credit}hr</span>
            </span>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white py-2 rounded-lg w-full"
          onClick={() => {
            addToChartFunction(unique_id);
          }}>
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
