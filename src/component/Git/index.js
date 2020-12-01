import React from 'react';

class Git extends React.Component{

    state = {};

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.userName}/repos`)
            .then(r => r.json())
            .then(d => d.forEach(repo => this.repoData(repo)));
    };


    repoData = (data) => {
        this.setState(prevState => ({
            prevState,
            [data.name]: {
                name: data.name,
                description: data.description,
                url: data.html_url,
                languages: data.language,
                stargazers: data.stargazers_count,
                watchers: data.watchers_count,
                updated: data.updated_at
            }
        }))
    }

    render(){
        return(
            <p>{this.props.userName}</p>
        );
    };
}

export default Git;