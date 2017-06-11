// Import the search Bar component
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";

import YTSearch from "youtube-api-search";

// youTube API Key
const YOUTUBE_API_KEY = 'AIzaSyAOnseq7l_Sgp6dCuEIr8lqquxydixEB0k';


// Create new component, which produces some HTML
// const is es6 feature and can't be reassigned while the function contains JSX


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
     };

    YTSearch({key: YOUTUBE_API_KEY, term : "Jonita Gandhi"},(videosData) => {
      this.setState({
        videos : videosData,
        selectedVideo: videosData[0]
       })
      console.log( videosData);
    })

  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>

        <div className="aside">
          <SearchBar/>
          <VideoList
            onVideoSelect = { selectedVideo => this.setState({ selectedVideo: selectedVideo }) }
            videos = {this.state.videos}
          />
        </div>

      </div>
    )
  };

}

  // const App = function() {
  //   return (
  //     <div>
  //       <SearchBar/>
  //     </div>
  //   );
  // }

// Take the component and render it onto the DOM i.e. on the HTML page
const root = document.querySelector('.root');
ReactDOM.render(<App/>, root);



// const search = document.querySelector('input');
//
// search.addEventListener('change',function() {
//   console.log(this.value);
// })
