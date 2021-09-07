import React,{ useRef, useEffect } from 'react';
import 'component/Header/Header.scss'
import { SearchBar } from 'component/SearchBar/SearchBar';
import { gsap, Power3 } from 'gsap';
export const Header = (props)=> {
  let headerItems = useRef(null)

  useEffect(()=>{
    console.log(headerItems);
    gsap.to(
      headerItems,
      {
        duration: 2,
        opacity: 1,
        y:-20,
        ease: Power3.easeOut
      }
    )
  },[])

  return( <>
      <header ref={it =>{headerItems = it}} id="header-container">
        <h1 className="header-title">WeatherNow</h1>
        <p className='header-content'>La méteo? D'accord...Mais de quelle ville? </p>
        <SearchBar hook={props.hook} setHook={props.setHook} handleSearch={props.handleSearch} />
      </header>
    </>
  )
}