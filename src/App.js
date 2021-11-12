import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import YoutubeApi from "./apis/youtubeapis";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import "./App.css";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  componentDidMount() {
    this.onTermSubmit("NCS");
  }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (input) => {
    const res = await YoutubeApi.get("/search", {
      params: {
        q: input,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-md-12 text-center app-header ">
            <i className="fab fa-youtube-square"> </i>
            &nbsp; Youtube Search Engine
          </h1>
        </div>
        <div className="row py-2">
          <div className="col-md-8">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <h3>Similar Search Results</h3>
            <VideoList
              videos={this.state.videos}
              onSelectVideo={this.onSelectVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
