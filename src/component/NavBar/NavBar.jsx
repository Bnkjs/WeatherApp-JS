import React,{ useRef, useEffect, useState } from 'react';
import './NavBar.scss';
import icon from 'elements/Icon/cloudy.svg';

export const Navbar = (props) => {
  let navRef = useRef(null)
  const [bg, setBg] = useState("#fff")
  useEffect(()=>{
       if (props.desc === 'clear sky'){
        setBg('#FED402')
        navRef.current.style.background = '#FED402'
      } else if(props.desc === 'few clouds' || props.desc === 'scattered clouds'|| props.desc === 'broken clouds' || props.desc ==='shower rain'|| props.desc === 'rain' || props.desc === 'thunderstorm'|| props.desc ==='snow'|| props.desc ==='mist'){
        navRef.current.style.background = '#C4E2FF'
      }
    }, [props.desc])

  return(<>
    <nav ref={navRef} id='nav'>
      <ul>
        <li className='nav-brand'>
          <img src={icon} alt="illustration d'un soleil caché par un nuage" />
        </li>
        <li>
          <p>WN</p>
          </li>
        <li className='nav-brand'>
        <img src={icon} alt="illustration d'un soleil caché par un nuage" />
        </li>
      </ul>
    </nav>
  </>)
}