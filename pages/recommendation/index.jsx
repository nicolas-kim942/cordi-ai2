// pages/recommendation/index.jsx
import { useEffect, useState } from "react";
import { fetchWeatherByCoords } from "../../lib/weather";
import WeatherInfo from "../../components/WeatherInfo";

export default function RecommendationPage() {
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

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>👕 AI 추천 코디 페이지</h1>
      <p>이곳은 AI가 오늘 코디를 추천해주는 공간입니다.</p>

      {/* 날씨 정보 컴포넌트 */}
      <WeatherInfo weather={weather} />

      <p>더 멋진 UI는 곧 적용될 예정이에요!</p>
    </div>
  );
}
