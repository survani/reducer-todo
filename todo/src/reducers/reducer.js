//newId helps generate a new [id] instead of using Date.now().
let newId = 1;

//our initial data.
export const initialState = [
  {
    item: "Milk",
    completed: false,
    id: 0
  }
];

/*This reducer is returning all the other specific reducers..
state=intialState - if no state is present state is assigned 
to intialState.*/

//root reducer
export const todoReducer = (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case "TOGGLE_ADD":
      return reduceAdd(state, action);
    case "TOGGLE_COMPLETED": 
      return reduceComplete(state, action)
    default:
      return state;
  }
};

//this is the [adding] reducer for the application.
const reduceAdd = (state, action) => {
  const freshTodo = {
    item: action.payload,
    completed: false,
    id: newId++
  };
  console.log("freshTodo: ", freshTodo);
  return [...state, freshTodo];
};

const reduceComplete = (state, action) => {

}
