import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Videos: [], selectedVideo: null };
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("Web developement");
  }

  onTermSubmit = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((response) =>
        this.setState({
          Videos: response.data.items,
          selectedVideo: response.data.items[0],
        })
      );
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.Videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
