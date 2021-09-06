import 'component/WeatherResult/WeatherResult.scss';
import { useRef, useEffect } from 'react';
export const WeatherResult = (props) => {
  return(<div id='result-container'>
    <div className='weather-card'></div>
        <div className='result-datas'>
          <p>Aujourd'hui</p>
          <p><span className='temp-result'>{props.temp}°</span></p>
          <h3 className='city-result'>{props.city}</h3>
        </div> 
    </div>)
}