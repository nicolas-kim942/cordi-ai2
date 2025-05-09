// components/WeatherInfo.jsx
import React from "react";

export default function WeatherInfo({ weather }) {
  if (!weather) return null;

  console.log("🔍 날씨 아이콘 URL:", weather.icon);
  
  return (
    <div style={{
      backgroundColor: "#f0f0f0",
      padding: "1.5rem",
      borderRadius: "0.75rem",
      marginBottom: "2rem",
      fontFamily: "sans-serif"
    }}>
      <h2>📍 현재 위치 날씨</h2>
      <p><strong>{weather.location}</strong> - {weather.condition}, {weather.tempC}°C</p>
      <img src={weather.icon.startsWith("//") ? `https:${weather.icon}` : weather.icon} alt="weather icon" />
    </div>
  );
}
