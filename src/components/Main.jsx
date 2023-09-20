import { useEffect, useState } from "react";
import Cards from "./Cards";
import Chart from "./Chart.jsx";
// import for react tost
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  // toast for allready select
  const allreadyAdd = () => {
    toast.warn("You allready add thi's items ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // toast for remaining time
  const remainingTimeFinish = () => {
    toast.error("Your Credit Hour Remaining Time is Finished", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // toast for cradit hours
  const Total_Credit_Hour = () => toast("Your Total Credit Hour  is Finished");

  // useState for load data
  const [allcardData, setCardData] = useState([]);
  // useState for add to chart items
  const [chartItems, setNewChart] = useState([]);
  //   useState for remaining time
  const [totalRemainIng, setRemaing] = useState(20);
  //   useState for total cradit hours
  const [totalCraditHours, setCraditHours] = useState(0);

  useEffect(() => {
    fetch("fakeData.json")
      .then((data) => data.json())
      .then((datas) => setCardData(datas));
  }, []);

  // function for add to chart items
  const addToChart = (newAdd) => {
    let addNewChart = allcardData.find(
      (findCardDatas) => findCardDatas.unique_id == newAdd
    );
    // new ad items find in old Cart
    let find = chartItems.find(
      (findChart) => findChart.unique_id === addNewChart.unique_id
    );
    // calculate total remaing
    let remainingTime = totalRemainIng - addNewChart.credit;
    // calculate total cradit hours
    let craditHours = totalCraditHours + addNewChart.credit;
    if (find) {
      allreadyAdd();
    } else if (remainingTime < 0) {
      remainingTimeFinish();
    } else if (craditHours > 20) {
      Total_Credit_Hour();
    } else {
      let totalCardItems = [...chartItems, addNewChart];
      setNewChart(totalCardItems);
      setRemaing(remainingTime);
      setCraditHours(craditHours);
    }
  };

  //   total price
  let totalPrice = chartItems.reduce(
    (totalMoney, newMoney) => totalMoney + newMoney.price,
    0
  );

  return (
    <div className="flex lg:flex-row flex-col gap-6  lg:justify-center">
      <Cards cardDatas={allcardData} addToChartFunction={addToChart}></Cards>
      <Chart
        chartItemsName={chartItems}
        remainingTime={totalRemainIng}
        totalPrice={totalPrice}
        craditHours={totalCraditHours}></Chart>
      <ToastContainer />
    </div>
  );
};

export { Main };
