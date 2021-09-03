import './index.scss';
import { Navbar } from 'component/NavBar/NavBar';
import { Header } from 'component/Header/Header';
import { WeatherResult } from 'component/WeatherResult/WeatherResult';
export const App =() =>{

  return(
      <div id="container-app">
        <Navbar/>
       <Header/>
       <WeatherResult/>
      </div>
  )
}