// lib/weather.js

export async function fetchWeatherByCoords(lat, lon) {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const baseUrl = `https://api.weatherapi.com/v1/current.json`;
  
    const url = `${baseUrl}?key=${apiKey}&q=${lat},${lon}&lang=ko`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("날씨 데이터를 불러오지 못했습니다.");
      }
      const data = await response.json();
      return {
        location: data.location.name,
        condition: data.current.condition.text,
        tempC: data.current.temp_c,
        icon: data.current.condition.icon,
      };
    } catch (error) {
      console.error("❌ 날씨 API 오류:", error);
      return null;
    }
  }
  