import { Route, NavLink } from 'react-router';
import apiKey from './config.js';
import './index.css';

import Searchform from './Searchform'


const api = apiKey;


function App() {
  return(
  <Searchform />
  )
 
}

export default App;
