import React from 'react';
import Repo from '../Repo';

class Git extends React.Component{

    state = {};

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.userName}/repos`)
            .then(r => r.json())
            .then(d => d.forEach(repo => this.repoData(repo)));
    };


    repoData = (data) => {
        this.setState(prevState => ({
            [data.name]: {
                name: data.name,
                description: data.description,
                url: data.html_url,
                languages: data.language,
                stargazers: data.stargazers_count,
                watchers: data.watchers_count,
                updated: data.updated_at,
                created: data.created_at
            }
        }))
    }

    allRepos = ()=>{
        const repoElements = [];

        for(const [repoName, repoData] of Object.entries(this.state)){
            repoElements.push(<Repo 
                key={repoName}
                name={repoName}
                description={repoData.description}
                url={repoData.url}
                languages={repoData.languages}
                stargazers={repoData.stargazers}
                watchers={repoData.watchers}
                updated={repoData.updated}
                created={repoData.created}
                />)
        }

        return repoElements;
    }

    render(){
        return(
            this.allRepos()
        );
    };
}

export default Git;