import { useState, useEffect } from "react";

export const SearchBar = () =>{
  const [input, setInput] = useState('paris')
  const onChangeInput = (e) => setInput(e.target.value)

  return(<div id='searchBar'>
     <form id="form-weather">
       <input 
        type="text" 
        name='search-input' 
        placeholder='Paris, Antalya, Lomé...' 
        className='search-input' 
        onChange={onChangeInput}
        value={input}
       />
     </form>
     <button>Rechercher</button>
  </div>)
}

export default SearchBar