const Chart = ({ chartItemsName, totalPrice, remainingTime, craditHours }) => {
  return (
    <div className="min-[]">
      <div className="max-w-[312px] bg-white rounded-lg p-6">
        <p className=" text-blue-500 text-lg font-bold">
          Credit Hour Remaining {remainingTime} hr
        </p>
        <hr className="mb-4" />
        <p className="text-xl font-bold">Course Name</p>
        <ul className="list-decimal text-base font-normal text-[#1C1B1B99] pl-5 my-4">
          {chartItemsName.map((chartName) => (
            <li key={chartName.unique_id}>{chartName.title}</li>
          ))}
        </ul>
        <hr />
        <p className="text-base font-normal  my-4">
          Total Credit Hour : {craditHours}
        </p>
        <hr />
        <p className="text-base font-normal  mt-4">
          Total Price : {totalPrice} USD
        </p>
      </div>
    </div>
  );
};

export default Chart;
