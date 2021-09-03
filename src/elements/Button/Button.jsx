import 'elements/Button/Button.scss';
export const Button = (props) => {
  return(<>
    <button className="btn-search" onClick={props.onClick}>Rechercher</button>
  </>)
}