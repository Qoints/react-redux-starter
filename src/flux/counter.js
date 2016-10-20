const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const counter = state => state.counter;

const defaultState = 0;
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
}
