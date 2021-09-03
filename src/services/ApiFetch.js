export default {
 CurrentWeather: async function (query, apiKey, Hook){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then(r => {Hook(r)})
      .catch(error => console.log(error))
    },

    ForceastFourDaysWeather: async function (query, apiKey, Hook){
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then(r => {Hook(r)})
      .catch(error => console.log(error))
    }
  }


