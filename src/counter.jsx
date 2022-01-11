import React, { Component } from 'react';

class Counter extends Component {
    state = {

    };
    formatSpantext = () => {
        return this.props.count === 0 ? "ZERO" : this.props.count;
    }
    formatBadgeClasses = () => {
        let str = "badge m-2 badge-";
        str += this.props.count === 0 ? "warning" : "primary";
        return str;
    }

    render() {
        const { counter, count, onIncrement, onDelete } = this.props;
        return (
            <div>
                <h4>Counter No.{counter.id}</h4>
                <span className={this.formatBadgeClasses()}>{this.formatSpantext()}</span>
                <button
                    className='btn btn-sm btn-secondary m-3'
                    onClick={() => onIncrement(counter)}
                >Increment</button>
                <button
                    className='btn btn-sm btn-danger'
                    onClick={() => onDelete(counter)}
                >Delete</button>
            </div>
        );
    }
}

export default Counter;