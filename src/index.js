import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyALMuCcKfk0855hdbTc7zcWDzOrNbHjV0s'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    //YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    //refactor above to this
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos);
      //this.setState({ videos: videos});
      //ES6 syntax allows us to compact above to next line when key & property have same name
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}
//take this html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
