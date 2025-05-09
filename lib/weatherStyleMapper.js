// lib/weatherStyleMapper.js

export function getStyleByWeather(condition) {
  if (!condition) return "기본 스타일";

  const keyword = condition.toLowerCase();

  if (keyword.includes("rain") || keyword.includes("비")) {
    return "스트릿 스타일";
  }
  if (keyword.includes("snow") || keyword.includes("눈")) {
    return "아웃도어 스타일";
  }
  if (keyword.includes("clear") || keyword.includes("맑음") || keyword.includes("sun")) {
    return "캐주얼 스타일";
  }
  if (keyword.includes("cloud") || keyword.includes("흐림") || keyword.includes("overcast")) {
    return "미니멀 스타일";
  }
  if (keyword.includes("fog") || keyword.includes("안개")) {
    return "모노톤 스타일";
  }

  return "트렌디 스타일"; // fallback
}
