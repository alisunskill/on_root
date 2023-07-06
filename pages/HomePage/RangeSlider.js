import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <hr />
      <div>
        <h1>multi-range-slider-react demo</h1>
      </div>
      <hr />
      <div className="multi-range-slider-container">
        <b>Simple range slider with default values</b>
        <hr />
        <MultiRangeSlider
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          onChange={(e) => {
            setMinValue2(e.minValue);
            setMaxValue2(e.maxValue);
          }}
        ></MultiRangeSlider>
        <div className="divOutput">
          <div>onInput :</div>
          <div>
            <span>{minValue}</span>
            <span>{maxValue}</span>
          </div>
        </div>
        <div className="divOutput">
          <div>onChange :</div>
          <div>
            <span>{minValue2}</span>
            <span>{maxValue2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
