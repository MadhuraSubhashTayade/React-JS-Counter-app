import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { counters, onIncrement, onDelete, onReset } = this.props;

        return (
            <div>
                <button
                    className='btn btn-sm btn-primary'
                    onClick={() => onReset()}
                >RESET</button>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        count={counter.value}
                        onIncrement={onIncrement}
                        onDelete={onDelete} />
                ))}
            </div>
        );
    }
}

export default Counters;