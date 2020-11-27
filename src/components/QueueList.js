import React from "react";
import Order from "./Order";
function QueueList(props) {
  return (
    <div className="QueueList">
      {props.orders.map((item, i) => {
        return <Order key={i} lineNumber={i} order={item} />;
      })}
    </div>
  );
}

export default QueueList;
