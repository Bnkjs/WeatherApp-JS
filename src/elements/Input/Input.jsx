import './Input.scss'
export const Input = (props) =>{
  return(<>
    <form id="form-weather">
       <input 
        type="text" 
        name='search-input' 
        placeholder='Paris, Antalya, Lomé...' 
        className='search-input' 
        onChange={props.onChangeInput}
        value={props.input}
        autoComplete="off"
       />
     </form>
    </>)
}