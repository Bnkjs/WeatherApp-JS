import React from "react";
import WeatherSvg from "elements/Icon/weather.svg";
import 'component/Preview/Preview.scss';
export const Preview = () => {
  return(
    <div id="preview-container">
    <img className='preview-illus' src={WeatherSvg} alt="illsutration" />
    </div>
  )
}