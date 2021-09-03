import react from 'react';
import { render } from '@testing-library/react';
import { App } from './container/AppContainer'

let rootElement = document.getElementById('root')

render(
  <App/>,
  rootElement
)