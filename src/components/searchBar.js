

// This is a class based component
class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = { term : "Jonita Gandhi" };

  }


  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange( event.target.value ) }
        />

      </div>
    )
  }

  onInputChange(query) {

    this.setState({ term : query } );

    this.props.onSearchQueryChange(query);

    console.log(event.target.value,this);

  }

}

// This is a functional component, does nothing, very dumb just returns some JSX
// const SearchBar = () => <input/>;

// <p>
//   The value of input is  <span className="searchTerm"> {this.state.term}</span>
// </p>

export default SearchBar;
