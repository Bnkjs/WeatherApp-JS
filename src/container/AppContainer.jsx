import './AppContainer.scss';
import { Navbar } from 'component/NavBar/NavBar';
import { Header } from 'component/Header/Header';
import { WeatherResult } from 'component/WeatherResult/WeatherResult';
import { Card } from 'elements/Card/Card';
import { MoonLoader } from 'react-spinners';
import { useState, useEffect, useRef } from "react";
import { Preview } from 'component/Preview/Preview';
import { NotyfEmpty, NotyfWrong } from 'component/Notification/Notification';
export const App =() =>{
  const [input, setInput] = useState("")
  const onChangeInput = (e) => setInput(e.target.value)
  const [datasTemp, setDatasTemp] = useState([])
  const [datas, setDatas] = useState("")
  const [desc, setDesc] = useState([])
  const [error, setError] = useState("")

  async function handleSearch(e){
    if(input === ""){
      NotyfEmpty()
      e.preventDefault()
    }else{
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
      .then(r => r.json())
      .then(r => {if(r.cod === 200){
        setDatasTemp(r.main.temp)
        setDatas(r)
        setDesc(r.weather[0].description)
      } else{
         setError(r.cod)
         NotyfWrong()
      }
    })
      .catch(error => setError(error))   
    }
        
  }

  useEffect(()=>{
  },[datas])

  return( 
      <div id="container-app">
       <Navbar desc={desc}/>
       <Header 
        hook={input} 
        setHook={onChangeInput}
        handleSearch={handleSearch} 
       />
      {  datas.cod? 
      <Card>
        <WeatherResult city={datas.name} temp={Math.ceil(datasTemp)} desc={desc}/>
      </Card> 
      : 
      <Card><Preview/></Card>
      }
     </div>
  )
}