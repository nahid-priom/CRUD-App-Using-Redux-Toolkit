const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

const { createStore } = require("redux");

const initialState = {
  count: 0,
};

//action

const incrementCounter = () => {
    return {
      type: INCREMENT,
    };
  };
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}
//Reducer
const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case INCREMENT_BY_VALUE:
        return {
            ...state,
            count: state.count + action.payload
        }
    default:
        return state;
  }
};

const store = createStore(incrementReducer);

//store
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounterByValue(10));
