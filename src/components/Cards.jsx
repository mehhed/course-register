import Card from "../components/Card.jsx";

function Cards({ cardDatas, addToChartFunction }) {
  //   console.log(cardDatas);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1024px] justify-center">
      {cardDatas.map((singleData) => (
        <Card
          eachCardData={singleData}
          key={singleData.unique_id}
          addToChartFunction={addToChartFunction}></Card>
      ))}
    </div>
  );
}

export default Cards;
