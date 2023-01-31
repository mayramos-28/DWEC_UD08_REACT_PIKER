import { useState } from "react";

export function Range(props) {
  const [rangeValue, StateValue] = useState(props.value);
  const { nameSlider, min, max } = props;

  const onChangeValue = (e) => {
    const value = parseInt(e.target.value)
     StateValue(value);
     props.onChangeValue(value);
  }

  return (
    <div className="box">
    <div className="inputs">
      <label>{nameSlider}: </label>
    </div>
    <div className="inputs">
      <input
        type="range"
        min={min}
        max={max}
        value={rangeValue}
        onChange={onChangeValue}
      />
    </div>
    <span className="rangeValue">{rangeValue}</span>
  </div>
  );
}
