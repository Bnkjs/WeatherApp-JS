import './AppContainer.scss';
import { Navbar } from 'component/NavBar/NavBar';
import { Header } from 'component/Header/Header';
import { WeatherResult } from 'component/WeatherResult/WeatherResult';
import ApiFetch from 'services/ApiFetch';
import { useState, useEffect } from "react";

export const App =() =>{
  const [input, setInput] = useState("")
  const onChangeInput = (e) => setInput(e.target.value)
  const [datas, setDatas] = useState("")
  
  function handleSearch(e){
    input === ""? e.preventDefault() :
    ApiFetch.CurrentWeather(input,process.env.REACT_APP_APIKEY,setDatas) 
  }

  useEffect(()=>{
    console.log(datas);
  },[datas])

  return(
      <div id="container-app">
       <Navbar/>
       <Header 
        hook={input} 
        setHook={onChangeInput}
        handleSearch={handleSearch} 
       />
       <WeatherResult/>
      </div>
  )
}