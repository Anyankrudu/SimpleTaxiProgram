// PROGRAM 1
// SimpleTaxiProgram

const type1 = {
  rideType: "basic",
  standardPrice: 4.5,
  minutePrice: 0.1,
  kilometerPrice: 0.3,
  disabledPrice: 0.7,
  nondisabledPrice: 0.2,
};

const type2 = {
  rideType: "comfort",
  standardPrice: 6.5,
  minutePrice: 0.4,
  kilometerPrice: 0.5,
  disabledPrice: 0.9,
  nondisabledPrice: 0.7,
};

const type3 = {
  rideType: "classic",
  standardPrice: 8.5,
  minutePrice: 0.6,
  kilometerPrice: 0.7,
  disabledPrice: 0.11,
  nondisabledPrice: 0.9,
};

let rideTypes = [type1, type2, type3];

const displayRideTypes = rideTypes.forEach(function (typ) {
  const getRideTypes = function ({ rideType, standardPrice }) {
    return { rideType, standardPrice };
  };
  console.log(getRideTypes(typ));
});

let ride = prompt("Select a ride by typing 'basic', 'comfort' or 'classic'...");

let currentRide;

const getCurrentRide = rideTypes.forEach(function (typ) {
  Object.keys(typ).forEach(function (typs) {
    if (typ[typs] === ride.toLowerCase()) currentRide = typ;
  });
});

console.clear();

console.log(currentRide);

let rideMinutes = prompt("How many minutes is your ride going to last?");
const calcSumRideMinutes = function (cur) {
  let sumRideMinutes = rideMinutes * cur.minutePrice;
  return Math.round(sumRideMinutes);
};

let rideDistance = prompt("What is the distance of your ride?");
const calcSumRideDistance = function (cur) {
  let sumRideDistance = rideDistance * cur.kilometerPrice;
  return Math.round(sumRideDistance);
};

let disability = prompt(
  "Are you ordering for a disabled person? If so type 'yes' otherwise 'no'"
);

const checkDisabilities = function (cur) {
  let dis = disability === "yes" ? cur.disabledPrice : cur.nondisabledPrice;
  return dis;
};

let rideSummary = {};

const displayRideSummary = function (curr) {
  rideSummary.ridePrice = curr.standardPrice;
  rideSummary.minutesPayment = calcSumRideMinutes(curr);
  rideSummary.distancePayment = calcSumRideDistance(curr);
  rideSummary.disabilityPayment = checkDisabilities(curr);
};

displayRideSummary(currentRide);
console.log(rideSummary);

let calcRidePrice = Object.values(rideSummary).reduce((tot, val) => tot + val);

let finalPrice = `Your Final Price is ${calcRidePrice}$`;
console.log(finalPrice);

let finalTotalPrices;

const calcTotalPrice = function (tarrs) {
  tarrs.forEach(function (tarr) {
    const test = Object.fromEntries(tarr);
    let cKey;
    let totalPrice;
    for (let key of Object.keys(test)) {
      if (key !== "quantity") {
        cKey = key;
        console.log(cKey);
      }
      totalPrice = test["quantity"] * test[cKey];

      console.log(
        `${test["quantity"]} x ${test[cKey]} EUR/${cKey} : ${totalPrice}EUR`
      );
    }
    finalTotalPrices.push(totalPrice);
  });
};

const finalSum = finalTotalPrices.reduce((sum, price) => sum + price, 0);
console.log(`${finalSum}EUR`);
