
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ENTER_YOUR_API_KEY',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	cityName.innerHTML = city;
	fetch(url, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			temp.innerHTML = `<text>${response.temp}</text>`
			temp2.innerHTML = response.temp
			feels_like.innerHTML = `<text>${response.feels_like}</text>`
			humidity.innerHTML = `<text>${response.humidity}</text>`
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = `<text>${response.min_temp}</text>`
			max_temp.innerHTML = `<text>${response.max_temp}</text>`
			wind_speed.innerHTML = `<text>${response.wind_speed}</text>`
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = `<text>${response.wind_degrees}</text>`
			sunrise.innerHTML = `<text>${response.sunrise}</text>`
			sunset.innerHTML = `<text>${response.sunset}</text>`
		})
		.catch(err => console.error(err));
}



submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})
getWeather("Delhi");




