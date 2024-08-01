console.log("From index.js");
//? Three Core Concepts in redux

//TODO>> 1)A store => that holds the state of your application.

//TODO>> 2)An action that describes the changes in the state of the application.

//TODO>> 3)A reducer which actually carries out the state transition depending on the action.

//? Three Principles in redux

//TODO>> 1)The state of your whole application is stored in an object tree within a single store.

//TODO>> 2)The only way to change the state is to emit an action , an object describing what happened.

//TODO>> 3)to specify how the state tree is transformed by actions, you write pure reducers.

//? { redux:['createStore' , 'subscribe' , 'getState' ,'applyMiddleWare' ,'combineReducers'] } , { redux-logger: [createLogger] } 

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY = {
  CAKE: 'CAKE',
  ICE: 'ICE'
}

initialCakeState = {
  numOfCakes: 10,
}

const cakeReducer = (state = initialCakeState , action) => {
  switch(action.type){
    case BUY.CAKE:
      return {...state , numOfCakes: state.numOfCakes -1 }

    default:
      return state
  }
}

initialIceState = {
  numOfIces: 20,
}

const iceReducer =(state = initialIceState , action) => {
  switch(action.type){
    case BUY.ICE:
      return {...state , numOfIces: state.numOfIces -1}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
})

//!cake order
function buyCake(){
  return {type: BUY.CAKE}
}
//!ice order
function buyIce(){
  return {type: BUY.ICE}
}


const store = createStore(rootReducer , applyMiddleWare(logger))
const unsubscribeCake = store.subscribe( () => {})

console.log('initial state ',store.getState())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())

unsubscribeCake()










// const redux = require('redux');
// // const createStore = redux.createStore;

// const BUY_CAKE = "BUY_CAKE";

// const BUY_ICE = "BUY_ICE";

// function buyCake(){
//   return {
//     type: BUY_CAKE,
//   };
// };

// function buyIce(){
//   return {
//     type: BUY_ICE,
//   };
// };

// // (previousState , action ) => newState

// const initialSate = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// const reducer = (state = initialSate, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       //! ...state => asking the reducer to first make a copy of the state object and then only update the number of Cakes.
//       return { ...state, numOfCakes: state.numOfCakes - 1 };
//     case BUY_ICE:
//       return { ...state, numOfIceCreams: state.numOfIceCreams -1}
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(reducer);
// console.log("initial state ", store.getState())

// const unsubscribe = store.subscribe(()=> console.log("Update state ",store.getState()))

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIce())
// store.dispatch(buyIce())
// store.dispatch(buyIce())
// //! console.log("initial state ", store.getState())


// unsubscribe()


