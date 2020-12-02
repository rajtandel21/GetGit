import React from 'react';
import './style.css';
import HoverRepo from '../HoverRepo';

class Repo extends React.Component{
    state ={
        display: false
    }
    dateFormat = (date) =>{
        const oldDate = date.slice(0, -1);
        const dateArray = oldDate.split("T");

        const newDate = `${dateArray[0]}, Time ${dateArray[1]}`

        return newDate;
    };
    
    hoverDisplay = () =>{
        this.setState(prevState => ({
            display: !prevState.display
        }))
    }

    render(){
        return(
            <>
            {this.state.display ?  (<HoverRepo 
                display = "true" 
                languages={(this.props.languages !== null) ? this.props.languages : 0}
                stargazers={this.props.stargazers}
                watchers={this.props.watchers}
            />) : null}
            <div className="repo" onClick={this.hoverDisplay}>
                <h3><a href={this.props.url}>{this.props.name}</a></h3>
                <p>{this.props.description}</p>
                <div>
                    <span className="stats">Updated: {this.dateFormat(this.props.updated)}</span>
                    <span className="stats">Created: {this.dateFormat(this.props.created)}</span>
                </div>
            </div>
            </>
        );
    }
}

export default Repo;