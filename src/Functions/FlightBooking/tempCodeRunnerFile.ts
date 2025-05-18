console.log(findFlightCost(flightDataString, "UK", "FR")); // { airline: 'Jet1', cost: 2 }
console.log(findFlightCost(flightDataString, "US", "UK")); // { airline: 'RyanAir', cost: 8 }
console.log(findFlightCost(flightDataString, "CA", "UK")); // { airline: 'CanadaAir', cost: 8 }
console.log(findFlightCost(flightDataString, "UK", "CA")); // null (no such flight)