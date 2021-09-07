import React,{ useRef, useEffect } from 'react';
import WeatherSvg from "elements/Icon/weather.svg";
import { gsap, Power3 } from 'gsap';
import 'component/Preview/Preview.scss';
export const Preview = () => {
  let itemRef = useRef(null)
  
  useEffect(()=>{
    gsap.to(
      itemRef,
      {
        duration: 1,
        y: -20,
        opacity:1,
        delay: 1
      }
    )
  },[])
  return(
    <div ref={it => itemRef = it} id="preview-container">
      <img className='preview-illus' src={WeatherSvg} alt="illsutration" />
    </div>
  )
}