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
        pageTitle: 'React components'
    };

    changeTitleHandle = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        });
    };

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        });
        console.log('Changed INPUT', event.target.value);
    };

    render() {
        console.log('>>>>render<<<<<');
        const divStyle = {
            textAlign: 'center'
        };

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
                <body>
                <div style={divStyle}>
                    <h1>{this.state.pageTitle}</h1>
                    <input type="text" onChange={this.handleInput}/>

                    <button onClick={this.changeTitleHandle.bind(this, 'Changed')}>
                        Change title
                    </button>

                    {this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeTitle={() => this.changeTitleHandle(car.name)}
                            />
                        );
                    })}

                    {/*<Car*/}
                    {/*name={cars[0].name}*/}
                    {/*year={cars[0].year}*/}
                    {/*onChangeTitle = {this.changeTitleHandle.bind(this, cars[0].name)}*/}
                    {/*/>*/}
                    {/*<Car*/}
                    {/*name={cars[1].name}*/}
                    {/*year={cars[1].year}*/}
                    {/*onChangeTitle = { () => this.changeTitleHandle(cars[1].name)}*/}
                    {/*/>*/}
                    {/*<Car*/}
                    {/*name={cars[2].name}*/}
                    {/*year={cars[2].year}*/}
                    {/*onChangeTitle = { () => this.changeTitleHandle(cars[2].name)}*/}
                    {/*/>*/}
                </div>
                </body>
            </div>
        );
    }
}

export default App;
