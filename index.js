const initialState = {
  counter: 3,
};

const store = Redux.createStore(reducer, initialState);


function updateView() {
  document.getElementById("counter").textContent = store.getState().counter;
}


// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return Object.assign({}, state, { counter: state.counter + 1 });
    case "DEC":
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
  }
}

store.subscribe(updateView);

document.getElementById('inc').onclick = () => store.dispatch({ type: 'INC' });
document.getElementById('dec').onclick = () => store.dispatch({ type: 'DEC' });

// Update
updateView();
subscribe(updateView);
