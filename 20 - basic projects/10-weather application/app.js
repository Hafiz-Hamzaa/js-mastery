/***********************
 * COUNTRY FALLBACK MAP
 ***********************/
const countryFallback = {
  uk: "London",
  pk: "Islamabad",
  in: "Delhi",
  us: "Washington",
  ca: "Ottawa",
  au: "Canberra",
  fr: "Paris",
  de: "Berlin"
};

/***********************
 * BUTTON EVENT
 ***********************/
const btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
  let input = document.getElementById("cityInput").value.trim();
  if (!input) return;

  const normalizedInput = normalizeInput(input);
  getWeather(normalizedInput);
});

/***********************
 * INPUT NORMALIZER
 ***********************/
function normalizeInput(input) {
  const lower = input.toLowerCase();

  // Case 1: Sirf country code (UK, PK, IN)
  if (countryFallback[lower]) {
    return countryFallback[lower];
  }

  // Case 2: City, Country
  if (input.includes(",")) {
    const [city, country] = input.split(",").map(v => v.trim());
    return `${city}, ${country}`;
  }

  // Case 3: Normal city
  return input;
}

/***********************
 * GET COORDINATES
 ***********************/
async function getCoordinates(query) {
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en&format=json`;

  const res = await fetch(geoUrl);
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Location not found");
  }

  // Prefer proper populated places (city/town)
  const bestMatch =
    data.results.find(r => r.feature_code?.startsWith("PPL")) ||
    data.results[0];

  return {
    latitude: bestMatch.latitude,
    longitude: bestMatch.longitude,
    name: `${bestMatch.name}, ${bestMatch.country}`
  };
}

/***********************
 * GET WEATHER
 ***********************/
async function getWeather(location) {
  try {
    const coords = await getCoordinates(location);

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true&hourly=relativehumidity_2m,cloudcover`;

    const res = await fetch(weatherUrl);
    const data = await res.json();

    const weather = data.current_weather;
    const hourly = data.hourly;

    const currentHour = new Date(weather.time).getHours();

    // UI UPDATE
    document.getElementById("cityName").innerText = coords.name;
    document.getElementById("temp").innerText = Math.round(weather.temperature);
    document.getElementById("condition").innerText =
      weather.weathercode_description || "Clear";

    document.getElementById("clouds").innerText =
      hourly.cloudcover[currentHour] + "%";
    document.getElementById("humidity").innerText =
      hourly.relativehumidity_2m[currentHour] + "%";
    document.getElementById("wind").innerText =
      weather.windspeed + " km/h";

  } catch (error) {
    alert(error.message);
  }
}
