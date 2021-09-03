import { Input } from '../../elements/Input/Input';
import { Button } from '../../elements/Button/Buton'
import { useState, useEffect } from "react";

export const SearchBar = () =>{
  const [input, setInput] = useState('paris')
  const onChangeInput = (e) => setInput(e.target.value)

  return(<div id='searchBar'>
     <Input/>
     <Button/>
  </div>)
}

export default SearchBar