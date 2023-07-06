import React, { useState } from "react";
import ReactSlider from "react-slider";

export default () => {
  const [values, setValues] = useState([0, 100]);

  const renderThumb = (props, state) => <div {...props}>{state.valueNow}</div>;

  const ariaValuetext = (state) => `Thumb value ${state.valueNow}`;

  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      defaultValue={values}
      ariaLabel={["Lower thumb", "Upper thumb"]}
      ariaValuetext={ariaValuetext}
      renderThumb={renderThumb}
      pearling
      minDistance={10}
      onChange={setValues}
    />
  );
};
