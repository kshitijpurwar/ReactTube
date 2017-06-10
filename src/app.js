

// Import the search Bar component
import SearchBar from "./components/searchBar";


// youTube API Key
const YOUTUBE_API_KEY = 'AIzaSyAOnseq7l_Sgp6dCuEIr8lqquxydixEB0k';

// Create new component, which produces some HTML
// const is es6 feature and can't be reassigned while the function contains JSX
const App = () => (
      <div>
        <SearchBar/>
      </div>
    );


// Take the component and render it onto the DOM i.e. on the HTML page
const root = document.querySelector('.root');
ReactDOM.render(<App/>, root);



// const search = document.querySelector('input');
//
// search.addEventListener('change',function() {
//   console.log(this.value);
// })
