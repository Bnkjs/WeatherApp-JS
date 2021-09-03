import 'component/Header/Header.scss'
import { SearchBar } from 'component/SearchBar/SearchBar'
export const Header = (props)=> {
  return( <>
      <header>
        <h1 className="header-title">WeatherNow</h1>
        <p className='header-content'>La méteo? D'accord.. <br />Mais de quelle ville? </p>
      </header>
      <SearchBar hook={props.hook} setHook={props.setHook} handleSearch={props.handleSearch} />
    </>
  )
}