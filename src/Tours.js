import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <>
      <ul>
        {props.tours.map((tour) => (
          <Tour {...tour} deleteTour={props.deleteTour} key={props.id} />
        ))}
      </ul>
    </>
  );
};

export default Tours;
