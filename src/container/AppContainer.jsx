import './index.scss';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export const App =() =>{

  return(
      <div id="container-app">
        <Router>
          <Switch>
            <Route exact path="/">
            </Route>
          </Switch>
        </Router>
      </div>
  )
}