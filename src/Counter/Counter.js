import React, {Component} from 'react';
import Auxillary from '../hoc/Auxillary';

export default class Counter extends Component {
    state = {
        counter: 0
    };

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        });
        // this.setState({
        //     counter: this.state.counter + 1
        // });
    };

    render() {
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}> -</button>
                <button onClick={this.addCounter}> +</button>
            </>
        );

        // return (
        //     <Auxillary>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}> -</button>
        //         <button onClick={this.addCounter}> +</button>
        //     </Auxillary>
        // );

        // return (
        //         <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}> -</button>
        //         <button onClick={this.addCounter}> +</button>
        //         </React.Fragment>;

        // return [
        //     <h2 key={1}>Counter {this.state.counter}</h2>,
        //     <button key={2} onClick={() => this.setState({counter: this.state.counter - 1})}> - </button>,
        //     <button key={3} onClick={this.addCounter}> + </button>
        // ];
    }
}