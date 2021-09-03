import { Input } from '../../elements/Input/Input';
import { Button } from '../../elements/Button/Buton'

export const SearchBar = (props) =>{
 
  return(<div id='searchBar'>
     <Input input={props.hook} onChangeInput={props.setHook}/>
     <Button onClick={props.handleSearch}/>
  </div>)
}

export default SearchBar