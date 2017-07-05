import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term:''}
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange = (e)=>{
        console.log(e.target.value);
        this.setState({term:e.target.value});
        this.props.onSearchTermChange(e.target.value);
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <h1>Youtube api</h1>
                    <input type="text" className="form-control" id="email" onChange={this.onInputChange} value={this.state.term}/>
                </div>
            </form>
        )
    }
}

export default SearchBar;