// @flow
export default function ConcCalc(
  vol: number,
  volUnit: string,
  mass: number,
  massUnit: string,
  conc: number,
  concMassUnit: string,
  concVolUnit: string,
  calc: string
) {
  //if we have mass and volume, return concentration
  //if (mass > 0 && vol > 0 && conc == 0) {
  if (calc === "concentration") {
    vol = convertUnits(vol, volUnit);
    mass = convertUnits(mass, massUnit);
    /*if (vol === "err" || mass === "err") {
      return "Please enter the units";
    }*/
    return "The concentration is " + roundToDigit(mass / vol, 3) + " mg/ml";
  }

  //if we have concentration and mass, return volume
  //if (mass > 0 && conc > 0 && vol == 0) {
  if (calc === "volume") {
    mass = convertUnits(mass, massUnit);
    conc = convertUnits(convertUnits(conc, concMassUnit), concVolUnit);
    /*if (mass === "err" || conc === "err") {
      return "Please enter the units";
    }*/
    var ans = mass / conc;
    return (
      "The volume is " +
      roundToDigit(ans * 1000, 1) +
      " ul, " +
      roundToDigit(ans, 3) +
      " ml or " +
      roundToDigit(ans / 1000, 6) +
      " l"
    );
  }

  //if we have volume and concentration, return mass
  //if (conc > 0 && vol > 0 && mass == 0) {
  if (calc === "mass") {
    vol = convertUnits(vol, volUnit);
    conc = convertUnits(convertUnits(conc, concMassUnit), concVolUnit);
    /*if (vol === "err" || conc === "err") {
      return "Please enter the units";
    }*/
    var ans = conc * vol;
    return (
      "The mass is " +
      roundToDigit(ans * 1000, 0) +
      " ug, " +
      roundToDigit(ans, 3) +
      " mg or " +
      roundToDigit(ans / 1000, 6) +
      " g"
    );
  } else {
    return "Please enter two of concentration, volume and mass";
  }
}

// Convert from original units to mg and ml
function convertUnits(n: number, unit: string): number {
  switch (unit) {
    case "mg":
    case "ml":
      return n;
    case "ul":
      return n / 1000;
    case "l":
      return n * 1000;
    case "ng":
      return n / 1000000;
    case "ug":
      return n / 1000;
    case "g":
      return n * 1000;
    default:
      throw new Error("Unexpected unit");
  }
}
// Need to write a function to get the right number of decimal places
// concentration to 3 decimal places.
// volume to 1 decimal point in uls. will probably always round up where it is ambiguous - is that a problem?
// mass to whole ug.

//Function takes a number and how many decimal places to return
function roundToDigit(number, digits) {
  return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}
