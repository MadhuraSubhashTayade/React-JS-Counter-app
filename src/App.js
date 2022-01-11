import React, { Component } from 'react';
import Counters from './counters';
import NavBar from './navbar';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 }
        ]
    };
    // Increment value of counter.
    handleIncrement = (counter) => {
        const countersCopy = [...this.state.counters];
        const index = countersCopy.indexOf(counter);
        countersCopy[index] = { ...counter };
        countersCopy[index].value++;
        this.setState({ counters: countersCopy });
    }
    // Delete counter.
    handleDelete = (counter) => {
        const countersCopy = this.state.counters.filter(c => c.id !== counter.id);
        this.setState({ counters: countersCopy });
    }
    // Reset all counters value to zero.
    handleReset = () => {
        const countersCopy = this.state.counters.map(cnt => {
            cnt.value = 0;
            return cnt;
        });
        this.setState({ counters: countersCopy });
    }
    // Return all counters with value > 0.
    getValidCounters = () => {
        const validCounters = this.state.counters.filter(c => c.value > 0);
        return validCounters;
    }

    render() {
        return (<div>
            <NavBar totalCounters={this.getValidCounters().length} />
            <Counters
                counters={this.state.counters}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset} />
        </div>);
    }
}

export default App;