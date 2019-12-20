import React, {useState, useEffect} from "react";
import './Favoris.css';

class Favoris extends React.Component {
    state = {tasks: []};

    saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(this.state))
    };


    addTask = () => {
        this.setState({tasks: [...this.state.tasks, 'New task']});
        this.saveStateToLocalStorage();
    };


    componentDidMount() {
        const state = localStorage.getItem('state');
        if (state) {
            this.setState(JSON.parse(state))
        }
    }

    removeFavorite = () => {

        const removeFavoriteElement = JSON.parse(localStorage.getItem('New task'));

        console.log(removeFavoriteElement);

        removeFavoriteElement.splice(31,1);

        console.log(removeFavoriteElement.task);

    };

    render() {
        return (
            <div>
                <button onClick={this.addTask}><img
                    src="https://image.noelshack.com/fichiers/2019/51/4/1576748748-etoile.png" alt="une étoile"/>
                </button>

                {this.state.tasks.map(task => (
                    <li>{task}</li>
                ))}

                <button onClick={this.removeFavorite}>clic me</button>

            </div>
        )
    }
}


export default Favoris;