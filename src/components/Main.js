import React from "react";
import Queue from "./Queue";
import Clock from "./Clock";
import Serving from "./Serving";
import ReadyList from "./ReadyList";
import Crew from "./Crew";
import Taps from "./Taps";

function Main(props) {
  
  const data = props.data;

  
  return (
    <div className="Main">
     
      <Clock data={props.data} />
      <Serving data={props.data} />
      <ReadyList />
      <Crew data={props.data}/>
      <Taps />
      <Queue data={data} />
     
    </div>
  );
}

export default Main;
