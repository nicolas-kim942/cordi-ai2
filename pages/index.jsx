import { useEffect, useState } from "react";
import { fetchWeatherByCoords } from "../../lib/weather"; // 위치는 상대경로로 조정하세요

export default function WeatherComponent() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const result = await fetchWeatherByCoords(latitude, longitude);
        setWeather(result);
      },
      (error) => {
        console.error("위치 정보를 불러올 수 없습니다:", error);
      }
    );
  }, []);

  if (!weather) return <p>날씨 정보를 불러오는 중...</p>;

  return (
    <div>
      <h2>현재 위치 날씨 🌤️</h2>
      <p>
        {weather.location}: {weather.condition}, {weather.tempC}°C
      </p>
      <img src={weather.icon} alt="날씨 아이콘" />
    </div>
  );
}
