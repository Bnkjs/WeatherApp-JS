import React,{ useState, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import 'elements/WeatherIcon/WeatherIcon.scss';
import Cloud from 'elements/Icon/cloud.svg';
import RainySun from 'elements/Icon/rainy-day.svg';
import Mist from 'elements/Icon/mist.svg';
import FewCloud from 'elements/Icon/sky.svg';
import Cloudy from 'elements/Icon/mist.svg';
import Scloud from 'elements/Icon/scloud.svg';
import Fcloud from 'elements/Icon/fcloud.svg';
import Snowy from 'elements/Icon/snowy.svg';
import Sunny from 'elements/Icon/sun.svg';
import Thunder from 'elements/Icon/thunderstorm.svg';
import Rain from 'elements/Icon/rain.svg';
export const WeatherIcon = (props) => {
  let [desc, setDesc] = useState("")
  
  useEffect(()=>{
    if(props.desc === 'clear sky'){
      setDesc(Sunny)
    }else if (props.desc === 'few clouds'){
      setDesc(FewCloud)
    }else if (props.desc === 'scattered clouds'){
      setDesc(Scloud)
    } else if (props.desc === 'broken clouds'){
      setDesc(Cloud)
    }else if (props.desc === 'shower rain'){
      setDesc(Rain)
    }else if (props.desc === 'rain'){
      setDesc(RainySun)
    }else if (props.desc === 'thunderstorm'){
      setDesc(Thunder)
    }else if (props.desc === 'snow'){
      setDesc(Snowy)
    }else if (props.desc === 'mist'){
      setDesc(Mist)
    }
    
    
  })
  
   return (<div id="icon-container">
      <img src={desc} alt="Icone représentant la méteo" />
  </div>)
  
}