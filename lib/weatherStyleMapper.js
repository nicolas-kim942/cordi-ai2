// 날씨 상태에 따라 추천 스타일을 매핑합니다.
export function getStyleByWeather(condition) {
  if (!condition) return "기본 스타일";

  const normalized = condition.toLowerCase();

  if (normalized.includes("비") || normalized.includes("rain")) {
    return "레인웨어 스타일";
  } else if (normalized.includes("눈") || normalized.includes("snow")) {
    return "겨울 아우터 스타일";
  } else if (normalized.includes("흐림") || normalized.includes("cloud")) {
    return "미니멀 무드";
  } else if (normalized.includes("맑음") || normalized.includes("sunny")) {
    return "캐주얼 스타일";
  } else if (normalized.includes("안개") || normalized.includes("fog")) {
    return "모노톤 스타일";
  }

  return "트렌디 스타일";
}
