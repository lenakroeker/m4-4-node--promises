// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};


const getDistanceFromIss = async (address) => {
  // write a new Promise here...
  if (!address) throw new Error("Address is required");
  const addressPos = await getPositionFromAddress(address);
  const issResults = await getIssPosition();


  return getDistance(addressPos, issResults);
};



getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response))
  .catch((err) => { return err.error ? JSON.parse(err.error) : err; });