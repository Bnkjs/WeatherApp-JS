import './Input.scss'
export const Input = ({input, onChangeInput}) =>{
  return(<>
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
    </>)
}