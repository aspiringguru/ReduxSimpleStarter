import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//move this to import from a file excluded from the git repo
const API_KEY = 'AIzaSyALMuCcKfk0855hdbTc7zcWDzOrNbHjV0s'

//create new component, this should produce html
//const App = function(){
//convert above to ES6 syntax.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
//take this html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
