import { useEffect, useState } from "react";
import { fetchWeatherByCoords } from "../../lib/weather";
import { getStyleByWeather } from "../../lib/weatherStyleMapper";
import WeatherInfo from "../../components/WeatherInfo";

export default function RecommendationPage() {
  const [weather, setWeather] = useState(null);
  const [styleType, setStyleType] = useState("");

  useEffect(() => {
    const fallbackLocation = { latitude: 37.5665, longitude: 126.9780 }; // 서울 기본 좌표

    const fetchData = async (lat, lon) => {
      try {
        const result = await fetchWeatherByCoords(lat, lon);
        setWeather(result);

        const style = getStyleByWeather(result.condition);
        setStyleType(style);
      } catch (err) {
        console.error("🌩️ 날씨 API 오류:", err);
      }
    };

    if (!navigator.geolocation) {
      fetchData(fallbackLocation.latitude, fallbackLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchData(latitude, longitude);
        },
        (err) => {
          console.warn("📍 위치 실패, 기본 좌표 사용:", err);
          fetchData(fallbackLocation.latitude, fallbackLocation.longitude);
        }
      );
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>👕 AI 추천 코디 페이지</h1>
      <WeatherInfo weather={weather} />
      {styleType && (
        <h2>
          오늘의 추천 스타일:{" "}
          <span style={{ color: "#f06292" }}>{styleType}</span>
        </h2>
      )}
      <p>더 멋진 UI는 곧 적용될 예정이에요!</p>
    </div>
  );
}
