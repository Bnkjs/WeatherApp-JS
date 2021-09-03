import { Input } from '../../elements/Input/Input';
import { Button } from '../../elements/Button/Buton'

export const SearchBar = ({input, onChangeInput}) =>{
  return(<div id='searchBar'>
     <Input input={input} onChangeInput={onChangeInput}/>
     <Button/>
  </div>)
}

export default SearchBar