import React,{ useRef, useEffect } from 'react';
import Calendar from "elements/Icon/calendar.svg";
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
      <img className='preview-illus' src={Calendar} alt="illsutration" />
    </div>
  )
}