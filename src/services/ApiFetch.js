export default {
 CurrentWeather: async function ({input,hook}){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.apiKey}`)
      .then(r => r.json())
      .then(hook())
      .catch(error => console.log(error))
    },

    ForceastFourDaysWeather: async function ({input,hook}){
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${process.env.apiKey}`)
      .then(r => r.json())
      .then(hook())
      .catch(error => console.log(error))
    }
  }


