import './AppContainer.scss';
import { Navbar } from 'component/NavBar/NavBar';
import { Header } from 'component/Header/Header';
import { WeatherResult } from 'component/WeatherResult/WeatherResult';
import { useState, useEffect } from "react";

export const App =() =>{
  const [input, setInput] = useState('paris')
  const onChangeInput = (e) => setInput(e.target.value)
  const [datas, setDatas] = useState("")

  return(
      <div id="container-app">
       <Navbar/>
       <Header/>
       <WeatherResult/>
      </div>
  )
}