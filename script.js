function askWeather() {
  const input = prompt("Enter weather: sunny, rainy, cloudy or windy");
  if (!input) return;

  const weather = input.toLowerCase();
  const img = document.getElementById('weatherImg');
  const text = document.getElementById('weatherText');
  const result = document.getElementById('result');

  const images = {
    sunny: "images/sunny.gif",
    rainy: "images/rainy.gif",
    cloudy: "images/cloudy.gif",
    windy: "images/windy.gif"
  };

  if (images[weather]) {
    img.src = images[weather];
    text.textContent = `It's ${weather} today!`;
    result.classList.remove("hidden");
  } else {
    alert("Invalid input. Try: sunny, rainy, cloudy, or windy.");
    result.classList.add("hidden");
  }
}
