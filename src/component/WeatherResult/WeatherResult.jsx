import 'component/WeatherResult/WeatherResult.scss';
import { useRef, useEffect } from 'react';
export const WeatherResult = (props) => {

  const weatherRef = useRef(null)
  const loadingRef = useRef(null)

  useEffect(()=>{
    console.log(weatherRef.current);
  })
  return(<div ref={weatherRef} id='result-container'>
    <div className='weather-card'></div>
        <div className='result-datas'>
          <p>Aujourd'hui</p>
          <p><span className='temp-result'>{props.temp}°</span></p>
          <h3 className='city-result'>{props.city}</h3>
        </div>
        <div ref={loadingRef} className="loadingRef"></div>
    {
      props.loading? 'test-true':'test-false'
    }
      
    </div>)
}