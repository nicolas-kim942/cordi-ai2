import { useEffect, useState } from "react";
import { fetchWeatherByCoords } from "../lib/weather";
import WeatherInfo from "../components/WeatherInfo";

export default function HomePage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fallbackLocation = { latitude: 37.5665, longitude: 126.9780 };

    if (!navigator.geolocation) {
      console.warn("❗ 위치 정보 기능을 지원하지 않음");
      fetchWeatherByCoords(fallbackLocation.latitude, fallbackLocation.longitude)
        .then(setWeather)
        .catch(err => console.error("🌩️ fallback 날씨 API 오류:", err));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log("📍 위치 가져오기 성공:", latitude, longitude);
          const result = await fetchWeatherByCoords(latitude, longitude);
          setWeather(result);
        } catch (err) {
          console.error("🌩️ 날씨 API 오류:", err);
        }
      },
      async (error) => {
        console.warn("📍 위치 실패, fallback 좌표 사용:", error);
        try {
          const result = await fetchWeatherByCoords(fallbackLocation.latitude, fallbackLocation.longitude);
          setWeather(result);
        } catch (err) {
          console.error("🌩️ fallback 날씨 API 오류:", err);
        }
      }
    );
  }, []);

  return (
    <div>
      <h1>AI 추천 코디</h1>
      <WeatherInfo weather={weather} />
    </div>
  );
}
