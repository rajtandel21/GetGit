import React from 'react';
import './style.css';

class HoverRepo extends React.Component {
    mystyle = {
        display: "none"
    }

    changeStyle = (val) => {
        this.mystyle.display = val;
    }

    render () {
        return (
            <>
            {this.props.display? this.changeStyle(true) : this.changeStyle(false)}
            <div className="container" style={this.mystyle}>
                <p>Languages used: {this.props.languages}</p>
                <p>Stargazers : {this.props.stargazers}</p>
                <p>Watchers : {this.props.watchers}</p>
            </div>
            </>
        )
    };
}

export default HoverRepo;