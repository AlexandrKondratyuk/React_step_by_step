import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
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

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars});
        console.log(name, index);
    };

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars});
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
                        onChangeName={(event) => this.onChangeName(event.target.value, index)}
                        onDelete={this.deleteHandler.bind(this, index)}
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
                    {/*<h1>{this.state.pageTitle}</h1>*/}
                    <h1>{this.props.title}</h1>

                    <button
                        className='AppButton'
                        onClick={this.toggleCarsHandler}
                    >
                        Toggle cars
                    </button>
                    <div style={{
                        width: 400,
                        margin: 'auto',
                        paddingTop: '20'
                    }}>
                        {cars}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
