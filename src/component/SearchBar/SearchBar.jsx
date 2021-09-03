import { Input } from '../../elements/Input/Input';
import { Button } from '../../elements/Button/Buton'
import { useState, useEffect } from "react";

export const SearchBar = () =>{
  const [input, setInput] = useState('')
  const onChangeInput = (e) => setInput(e.target.value)

  return(<div id='searchBar'>
     <Input input={input} onChangeInput={onChangeInput}/>
     <Button/>
  </div>)
}

export default SearchBar