import React from 'react';
// import Radium from 'radium';
import './Car.css'

class Car extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState);
        return nextProps.name.trim() !== this.props.name;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    // new method from v.16.3
    static getDerivedStateFromProps (nextProps, prevState) {
        console.log('Car getDerivedStateFromProps', nextProps, prevState);

        return prevState;
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    // new method from v.16.3
    getSnapshotBeforeUpdate () {
        console.log('Car getSnapshotBeforeUpdate')

    }

    componentWillUnmount () {
        console.log('Car componentWillUnmount');
    }

    render() {
        console.log('Car render');
        const inputClasses = ['input'];
        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        };

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red');
        }

        return (
            <div className='Car' style={style}>
                <h3>Car name : {this.props.name}</h3>
                <p>Year : <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    };
}

export default Car;