import { connect } from "react-redux";
import * as actions from "../actions";
import Counter from "../components/Counter";

const mapStateToProps = state => ({
  number: state.number,
  color: state.color
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement())
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
