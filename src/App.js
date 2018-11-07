import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './components/Car/Car';

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Mazda', year: 2016},
            {name: 'Skoda', year: 2013}
        ],
        pageTitle: 'React components',
        showCars: false
    };

    changeTitleHandle = (pageTitle) => {
        this.setState({pageTitle});
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    render() {
        console.log('>>>>render<<<<<');
        const divStyle = {
            textAlign: 'center'
        };

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandle(car.name)}
                    />
                );
            })
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        React here
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <div style={divStyle}>
                    <h1>{this.state.pageTitle}</h1>

                    <button onClick={this.toggleCarsHandler}>
                        Toggle cars
                    </button>
                    {cars}
                </div>
            </div>
        );
    }
}

export default App;
