import 'component/WeatherResult/WeatherResult.scss';
export const WeatherResult = (props) => {
  return(<div id='result-container'>
      <div className='weather-card'></div>
        <div className='result-datas'>
          <p>Aujourd'hui</p>
          <h3 className='city-result'>{props.city}</h3>
          <p><span className='temp-result'>{props.temp}</span></p>
        </div>
    </div>)
}