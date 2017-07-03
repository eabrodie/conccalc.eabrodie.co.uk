//@flow
import React from "react";
import styled from "styled-components";
import ConcCalc from "./conc-calc.js";

const OutputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 50px;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #178ba8;
`;

type Props = {
  volume: string,
  volumeUnits: string,
  mass: string,
  massUnits: string,
  conc: string,
  concMassUnits: string,
  concVolUnits: string,
  calc: string
};

export default function Output(props: Props) {
  return (
    <OutputRow>
      {ConcCalc(
        +props.volume,
        props.volumeUnits,
        +props.mass,
        props.massUnits,
        +props.conc,
        props.concMassUnits,
        props.concVolUnits,
        props.calc
      )}
    </OutputRow>
  );
}
