/**
 * Given a string of specially formated flight information
Example usage:
const flightDataString = "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8";

Test the function with different source and destination pairs
console.log(findFlightCost(flightDataString, "UK", "US")); // { airline: 'FedEx', cost: 4 }
console.log(findFlightCost(flightDataString, "UK", "FR")); // { airline: 'Jet1', cost: 2 }
console.log(findFlightCost(flightDataString, "US", "UK")); // { airline: 'RyanAir', cost: 8 }
console.log(findFlightCost(flightDataString, "CA", "UK")); // { airline: 'CanadaAir', cost: 8 }
console.log(findFlightCost(flightDataString, "UK", "CA")); // null (no such flight)
*/
// type FlightDetail = { airline: string; price: number };
// type FindFlightCost = (
//   flightDetaString: string,
//   from: string,
//   to: string
// ) => FlightDetail | null;
// const findFlightCost: FindFlightCost = (flightDataString, from, to) => {
//   const flights = flightDataString.split(",");
//   const flightDetails = new Map<string, FlightDetail>();
//   flights.forEach((flight) => {
//     const [departion, destination, airline, price] = flight.split(":");
//     const route = `${departion}:${destination}`;
//     // we can assume there's not duplicate route
//     flightDetails.set(route, { airline, price: Number(price) });
//   });

//   return flightDetails.get(`${from}:${to}`) ?? null;
// };

// const flightDataString =
//   "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8";

// console.log(findFlightCost(flightDataString, "UK", "US")); // { airline: 'FedEx', cost: 4 }
// console.log(findFlightCost(flightDataString, "UK", "FR")); // { airline: 'Jet1', cost: 2 }
// console.log(findFlightCost(flightDataString, "US", "UK")); // { airline: 'RyanAir', cost: 8 }
// console.log(findFlightCost(flightDataString, "CA", "UK")); // { airline: 'CanadaAir', cost: 8 }
// console.log(findFlightCost(flightDataString, "UK", "CA")); // null (no such flight)

type FlightDetail = { airline: string; price: number };
type RouteDetail = { route: string; airline: string; price: number };
type FindFlightCost = (
  flightDetaString: string,
  from: string,
  to: string
) => RouteDetail | null;
const findFlightCost: FindFlightCost = (flightDataString, from, to) => {
  const flights = flightDataString.split(",");
  const flightGraph = new Map<string, string[]>();
  const flightDetails = new Map<string, FlightDetail>();
  flights.forEach((flight) => {
    const [departion, destination, airline, price] = flight.split(":");
    const route = `${departion}:${destination}`;
    // we can assume there's not duplicate route
    flightDetails.set(route, { airline, price: Number(price) });

    // set departion/destination graph relationship
    if (!flightGraph.has(departion)) {
      flightGraph.set(departion, [destination]);
    } else {
      flightGraph.set(departion, [...flightGraph.get(departion)!, destination]);
    }
  });

  const directRoute = `${from}:${to}`;
  if (flightDetails.has(directRoute)) {
    const { airline, price } = flightDetails.get(directRoute)!;
    return {
      route: `${from} -> ${to}`,
      airline,
      price,
    };
  }

  // BFS lookup shortest path
  const queue = [[from]];
  const visited = new Set([from]);
  while (queue.length) {
    const path = queue.shift()!;
    const currentLocation = path[path.length - 1];
    const connections = flightGraph.get(currentLocation) || [];
    for (const nextLocation of connections) {
      const fullPath = [...path, nextLocation];
      if (nextLocation === to) {
        let totalCost = 0;
        const routes = fullPath.join(" -> ");
        const airlines: string[] = [];

        for (let i = 0; i < fullPath.length - 1; i++) {
          const currentRoute = `${fullPath[i]}:${fullPath[i + 1]}`;
          const { airline, price } = flightDetails.get(currentRoute)!;
          totalCost += price;
          airlines.push(airline);
        }

        return {
          route: routes,
          airline: airlines.join(" -> "),
          price: totalCost,
        };
      }

      if (!visited.has(nextLocation)) {
        visited.add(nextLocation);
        queue.push(fullPath);
      }
    }
  }
  return null;
};

const flightDataString =
  "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8";

console.log(findFlightCost(flightDataString, "UK", "US")); // { airline: 'FedEx', cost: 4 }
console.log(findFlightCost(flightDataString, "CA", "US")); // { airline: 'FedEx', cost: 4 }
