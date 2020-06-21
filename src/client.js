// @flow
import ReactDOM from "react-dom";
import React from "react";
import styled from "styled-components";
import ConcCalc from "./conc-calc.js";
import Output from "./output.js";

const InputRow = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    min-height: 120px;
  }
`;

const Button = styled.button`
  flex-basis: 0;
  flex-grow: 1;
  background: whitesmoke;
  color: #178ba8;
  border: 2px solid #178ba8;
  font-family: Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 1em;
  text-align: center;

  @media(max-width: 800px) {
    margin:0;
  }
`;

const InputValue = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  border: none;
  min-height: 50px;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  padding: 1em;
  text-align: center;
`;

const Label = styled.label`
  padding: 0.5em;
`;

const Input = styled.input`
  background: whitesmoke;
`;

const Select = styled.select`
  background: whitesmoke;
`;

function displayVolume(calc) {
  if (calc === "concentration" || calc === "mass") {
    return true;
  } else {
    return false;
  }
}

function displayMass(calc) {
  if (calc === "concentration" || calc === "volume") {
    return true;
  } else {
    return false;
  }
}

function displayConcentration(calc) {
  if (calc === "mass" || calc === "volume") {
    return true;
  } else {
    return false;
  }
}

class App extends React.Component {
  state = {
    volume: "",
    volumeUnits: "ul",
    mass: "",
    massUnits: "ug",
    conc: "",
    concVolUnits: "mg",
    concMassUnits: "ml",
    calc: ""
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _onClick = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <InputRow>
          <Button name="calc" value="volume" onClick={this._onClick}>
            Volume
          </Button>

          <Button name="calc" value="mass" onClick={this._onClick}>
            Mass
          </Button>

          <Button name="calc" value="concentration" onClick={this._onClick}>
            Concentration
          </Button>

        </InputRow>

        <InputRow>
          {displayVolume(this.state.calc) &&
            <InputValue>
              <Label>Volume</Label>
              <Input
                type="tel"
                name="volume"
                value={this.state.volume}
                onChange={this._onChange}
              />
              <Select
                name="volumeUnits"
                value={this.state.volumeUnits}
                onChange={this._onChange}
              >
                <option>ul</option>
                <option>ml</option>
                <option>l</option>
              </Select>
            </InputValue>}

          {displayMass(this.state.calc) &&
            <InputValue>
              <Label>Mass</Label>
              <Input
                type="tel"
                name="mass"
                value={this.state.mass}
                onChange={this._onChange}
              />
              <Select
                name="massUnits"
                value={this.state.massUnits}
                onChange={this._onChange}
              >
                <option>ng</option>
                <option selected>ug</option>
                <option>mg</option>
                <option>g</option>
              </Select>
            </InputValue>}
          {displayConcentration(this.state.calc) &&
            <InputValue>
              <Label>Concentration</Label>
              <Input
                type="tel"
                name="conc"
                value={this.state.conc}
                onChange={this._onChange}
              />
              <Select
                name="concMassUnits"
                value={this.state.concMassUnits}
                onChange={this._onChange}
              >
                <option>ng</option>
                <option selected>ug</option>
                <option>mg</option>
                <option>g</option>
              </Select>
              /
              <Select
                name="concVolUnits"
                value={this.state.concVolUnits}
                onChange={this._onChange}
              >
                <option selected>ul</option>
                <option>ml</option>
                <option>l</option>
              </Select>
            </InputValue>}
        </InputRow>
        <InputRow>
          <Output {...this.state} />
        </InputRow>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("content"));
