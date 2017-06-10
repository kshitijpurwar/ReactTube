

// This is a class based component
class SearchBar extends React.Component{

  constructor(props){
    
    super(props);

    this.state = { term : "Find Something cool today" };

  }


  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term : event.target.value }) }
        />
          The value of input is <span className="searchTerm">{this.state.term}</span>
      </div>
    )
  }

  // onInputChange(event) {
  //
  //   this.setState({ term : event.target.value} )
  //
  //   console.log(event.target.value,this);
  //
  // }

}

// This is a functional component, does nothing, very dumb just returns some JSX
// const SearchBar = () => <input/>;


export default SearchBar;
