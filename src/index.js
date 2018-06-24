//importing notes : when importing from library, just name library in quotes ie 'library-name'
//when importing from a file, need to give relative path in quotes excluding the extension.

import _ from 'lodash';
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
    this.videoSearch('apples');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
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
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    //uses lodash to restrict frequency of update to min 300 millisecond intervals

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/*videoSearch replaces term => this.videoSearch(term)*/}
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  }
}
//take this html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
