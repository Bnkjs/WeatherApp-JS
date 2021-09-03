
export const WeatherResult = ({city,temp}) => {
  return(<div id='result-container'>
      <div className='weather-card'></div>
        <div className='result-datas'>
          <p>Aujourd'hui</p>
          <h3 className='city-result'>{city}</h3>
          <p><span className='temp-result'>{temp}</span></p>
        </div>
  
  
    </div>)
}