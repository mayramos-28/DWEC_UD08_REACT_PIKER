import React from "react";
import { Range } from "./Range";

// function Piker(props) {
//   const { nameSlider, min, max } = props;
//    return (
//     <div className="main">
//      <GetRange nameSlider={nameSlider} min={min} max={max} />
//     </div>
//   );
// }

export class Piker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 0,
      saturation: 0,
      steps: 5,
    };
  }

  render() {
    return (
      <>
        <h1>Piker</h1>
        <Range
          nameSlider={"Hue"}
          min={0}
          max={360}
          value={this.state.hue}
          onChangeValue={(e) => this.setState({ ...this.state, hue: e })}
        />
        <Range
          nameSlider={"Saturation"}
          min={0}
          max={10}
          value={this.state.saturation}
          onChangeValue={(e) => this.setState({ ...this.state, saturation: e })}
        />
        <Range
          nameSlider={"Steps "}
          min={5}
          max={100}
          value={this.state.steps}
          onChangeValue={(e) => this.setState({ ...this.state, steps: e })}
        />

        <div className="main">
          <p>Hue : {this.state.hue}</p>
          <p>Saturation : {this.state.saturation}</p>
          <p>Steps : {this.state.steps}</p>
        </div>
      </>
    );
  }
}
