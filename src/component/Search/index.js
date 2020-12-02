import React from 'react';
import Git from '../Git';
import './style.css';

class Search extends React.Component{
    state = {
        userName: "",
        userEntered: false
    }

    changeUser = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    formSubmitted = (e) => {
        e.preventDefault();
        this.setState({
            userEntered: true
        })
    }

    render(){
        return(
            <div className="searchContainer">
                <form onSubmit={this.formSubmitted}>
                    <input className="searchField" type="text" value={this.state.userName} onChange={this.changeUser} />
                    <input className="searchBtn" type="submit" value="Search" />
                </form>
                {this.state.userEntered ? (<div className="result">
                    <Git userName={this.state.userName} />
                </div>) : null}
            </div>
        );
    };
}

export default Search;