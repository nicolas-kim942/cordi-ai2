useEffect(() => {
  const fallbackLocation = { latitude: 37.5665, longitude: 126.9780 }; // 서울 좌표

  if (!navigator.geolocation) {
    console.log("⚠ 위치 정보 사용 불가. 기본 좌표 사용.");
    fetchWeatherByCoords(fallbackLocation.latitude, fallbackLocation.longitude).then(setWeather);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const result = await fetchWeatherByCoords(latitude, longitude);
      setWeather(result);
    },
    async (error) => {
      console.error("❌ 위치 정보를 불러올 수 없습니다. 기본 좌표로 대체합니다.", error);
      const result = await fetchWeatherByCoords(fallbackLocation.latitude, fallbackLocation.longitude);
      setWeather(result);
    }
  );
}, []);
