import React from 'react';
import Git from '../Git';

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
            <div>
                <form onSubmit={this.formSubmitted}>
                    <input type="text" value={this.state.userName} onChange={this.changeUser} />
                    <input type="submit" value="Search" />
                </form>
                {this.state.userEntered ? (<Git userName={this.state.userName} />) : (<p>Please enter a User Name</p>)}
            </div>
        );
    };
}

export default Search;