import React from 'react';
import './style.css';

class Repo extends React.Component{
    dateFormat = () =>{
        const oldDate = (this.props.updated).slice(0, -1);
        const dateArray = oldDate.split("T");

        const newDate = `Updated: ${dateArray[0]}, Time ${dateArray[1]}`

        return newDate
    };
    
    render(){
        return(
            <div className="repo">
                <h3><a href={this.props.url}>{this.props.name}</a></h3>
                <p>{this.props.description}</p>
                <div>
                    <span className="stats">Languages:{(this.props.languages !== null) ? this.props.languages : 0}</span>
                    <span className="stats">Stargazers:{this.props.stargazers}</span>
                    <span className="stats">Watcher:{this.props.watchers}</span>
                    <span className="stats">{this.dateFormat()}</span>
                </div>
            </div>
        );
    }
}

export default Repo;