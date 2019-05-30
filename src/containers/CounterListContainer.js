import CounterList from '../components/CounterList'
import * as actions from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ counters: state.counters })
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (color) => dispatch(actions.setColor(color))
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);
export default CounterListContainer;