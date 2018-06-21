import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

//move this to import from a file excluded from the git repo
const API_KEY = 'AIzaSyALMuCcKfk0855hdbTc7zcWDzOrNbHjV0s'

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

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
