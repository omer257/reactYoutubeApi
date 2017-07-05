import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js';
import VideoDetail from './components/VideoDetail.js';
import _ from 'lodash';

const API_KEY = 'AIzaSyBv16f04q0JMJDA5EEumQH0rZ318aXyppM';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('random');
        
    }
    videoSearch = (term) => {
        YTSearch({
            key: API_KEY,
            term: term
        }, videos => {
            this.setState({videos, selectedVideo: videos[0]});
        });
    }
    render() {
        const videoSearch = _.debounce(term=>this.videoSearch(term),333);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar onSearchTermChange={videoSearch}/>
                    </div>
                </div>
                <div className="row">
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.querySelector(".container"));