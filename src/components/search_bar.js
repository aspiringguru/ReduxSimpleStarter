//import React from 'react';
// the , { Component } below allows
//class SearchBar extends React.Component {
//to be reduced to
//class SearchBar extends Component {
//smae as saying const Component = React.Component

import React, { Component } from 'react';

//this is a functional component
/*
const SearchBar = () => {
  return <input />;
}
*/

// refactor above as an ES6 class
class SearchBar extends Component {
  render() {
    //return <input onChange={this.onInputChange}  />;
    return <input onChange={(event) => console.log(event.target.value) }  />;
  }

  /*
  onInputChange(event) {
    console.log(event.target.value)
    //console.log(event)
  }
  */
}


export default SearchBar;
