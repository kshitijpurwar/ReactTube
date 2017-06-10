

// youTube API Key
const YOUTUBE_API_KEY = 'AIzaSyAOnseq7l_Sgp6dCuEIr8lqquxydixEB0k';

// Create new component, which produces some HTML
// const is es6 feature and can't be reassigned while the function contains JSX
const App = () => <div> Hi World ! </div>;


// Take the component and render it onto the DOM i.e. on the HTML page
const root = document.querySelector('.root');
ReactDOM.render(<App/>, root);
