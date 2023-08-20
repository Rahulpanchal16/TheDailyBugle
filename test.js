weatherFunc = async () => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=bb901075cd474eec82060824231908&q=mumbai&aqi=yes";
  let data = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((weather) => console.log(weather.current.temp_c));
};

weatherFunc();

obj = {
  location: {
    name: "Mumbai",
    region: "Maharashtra",
    country: "India",
    lat: 18.98,
    lon: 72.83,
    tz_id: "Asia/Kolkata",
    localtime_epoch: 1692452386,
    localtime: "2023-08-19 19:09",
  },
  current: {
    last_updated_epoch: 1692451800,
    last_updated: "2023-08-19 19:00",
    temp_c: 28.0,
    temp_f: 82.4,
    is_day: 0,
    condition: {
      text: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
      code: 1030,
    },
  },
};
