// lib/weatherStyleMapper.js

export function getStyleByWeather(condition) {
  const keyword = condition.toLowerCase();

  if (keyword.includes("rain") || keyword.includes("shower")) {
    return "스트릿";
  }
  if (keyword.includes("snow")) {
    return "미니멀";
  }
  if (keyword.includes("sun") || keyword.includes("clear")) {
    return "캐주얼";
  }
  if (keyword.includes("cloud") || keyword.includes("overcast")) {
    return "비즈니스 캐주얼";
  }
  return "캐주얼"; // 기본값
}
