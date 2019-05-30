import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

import './CounterList.css';

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {

    const CounterList = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            >

            </Counter>
        )
    )

    return (
        <div className="CounterList">
            {CounterList}
        </div>
    );
};

CounterList.prototype = {
    counters: PropTypes.arrayOf(PropTypes.shape({ color: PropTypes.string, number: PropTypes.number })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
};

CounterList.defaultProps = {
    counters: []
};

export default CounterList;


