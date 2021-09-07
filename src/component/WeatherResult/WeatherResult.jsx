import React,{ useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import 'component/WeatherResult/WeatherResult.scss';

export const WeatherResult = (props) => {
  let containerRef = useRef(null)
  let resultRef = useRef(null)
  useEffect(()=>{
    gsap.to(
      containerRef,
      {
        duration: 1,
        opacity: 1,
        y:-20,
        ease: Power3.easeOut
      }
    )
  })
  return(<div ref={it => containerRef = it} id='result-container'>
    <div className='weather-card'></div>
        <div ref={it => resultRef = it} className='result-datas'>
          <p>Aujourd'hui</p>
          <p><span className='temp-result'>{props.temp}°</span></p>
          <h3 className='city-result'>{props.city}</h3>
        </div> 
    </div>)
}