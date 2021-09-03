import { SearchBar } from 'component/SearchBar/SearchBar'
export const Header = ({input, onChangeInput})=> {
  return( <>
      <header>
        <h1 className="header-title">WeatherNow</h1>
        <p className='header-content'>La méteo? D'accord.. <br />Mais de quelle ville? </p>
      </header>
      <SearchBar input={input} onChangeInput={onChangeInput} />
    </>
  )
}