import React from "react";
import Queue from "./Queue";
import Clock from "./Clock";
import Serving from "./Serving";
import MostSoldBeer from "./MostSoldBeer";
import Crew from "./Crew";
import Taps from "./Taps";

function Main(props) {
  const data = props.data;

  return (
    <div className="Main">
      {/* <Clock data={data} /> */}
      <Serving data={data} />
      <Crew data={data} />
      <Taps data={data} />
      <Queue data={data} />
      <MostSoldBeer data={data} />
      <Crew data={data} />
      <Taps data={data} />
      <Queue data={data} />
    </div>
  );
}

export default Main;
