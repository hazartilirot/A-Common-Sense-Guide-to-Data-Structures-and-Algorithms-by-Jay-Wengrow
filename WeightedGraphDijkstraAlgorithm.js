class City {
	#cityName;
	#routes
	constructor(cityName) {
		this.#cityName = cityName;
		this.#routes = {}
	}
	/*a cityName is used as a key in routes since we cannot use an object. 
	Then a city and price are placed in an array and assigned to the the key
	we would use const [city, price] of Object.values(city.routes) in a for 
	loop to iterate over each value*/
	createRoute(city, price) {
		this.#routes[city.cityName] = [city, price];
	}
	
	get cityName() { return this.#cityName; }
	get routes() { return this.#routes; } 
}

class Analytics {
	
	getCheapestRoute(startCity, finalCity) {
		const cheapestPrices = {};
		const cheapestStopoverCity = {};
		
		const visitedCities = {};
		let unvisitedCities = [];
		
		cheapestPrices[startCity.cityName] = 0;
		let currentCity = startCity;

		while (currentCity) {
			visitedCities[currentCity.cityName] = true;

			unvisitedCities = unvisitedCities.filter(city => city.cityName !== currentCity.cityName);

			for (const [adjacentCity, price] of Object.values(currentCity.routes)) {
				if (!visitedCities[adjacentCity.cityName]) {
					unvisitedCities.push(adjacentCity);
				}
                
				const totalPrice = cheapestPrices[currentCity.cityName] + price;
				
				if (!cheapestPrices[adjacentCity.cityName] || 
					totalPrice < cheapestPrices[adjacentCity.cityName]) {
					cheapestPrices[adjacentCity.cityName] = totalPrice;
					cheapestStopoverCity[adjacentCity.cityName] = currentCity.cityName;
				}
			}
          
			let min = Infinity;
            
			for (const city of unvisitedCities) {
				if (min > cheapestPrices[city.cityName]) {
					min = cheapestPrices[city.cityName];
					currentCity = city;
				}
			}
		}
		
		const shortestPath = [];
		let currentCityName = finalCity.cityName;
		
		while (currentCityName !== startCity.cityName) {
			shortestPath.push(currentCityName)
			currentCityName = cheapestStopoverCity[currentCityName];
	
		}
		shortestPath.push(startCity.cityName)
        return {
          route: shortestPath.reverse(),
          price: cheapestPrices[finalCity.cityName]
        }
	}
}

const atlanta = new City('Atlanta');
const boston = new City('Boston');
const chicago = new City('Chicago');
const denver = new City('Denver');
const elPaso = new City('El Paso');

atlanta.createRoute(boston, 100);
atlanta.createRoute(denver, 160);
boston.createRoute(chicago, 120);
boston.createRoute(denver, 180);
chicago.createRoute(elPaso, 80);
denver.createRoute(chicago, 40);
denver.createRoute(elPaso, 140);
                    
                    
const analytics = new Analytics();
                    
console.log(analytics.getCheapestRoute(atlanta, elPaso));