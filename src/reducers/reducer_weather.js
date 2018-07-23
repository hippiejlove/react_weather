import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // log action
  console.log('Action recieved: ', action);
  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state];                  // ES6 syntax to flatten state and add it all 
  }
  return state;
}
