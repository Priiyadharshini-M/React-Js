import {createStore,applyMiddleware} from 'redux';
import rootReducer from './RootReducer';
import logger from 'redux-logger'; //middleware-->see console for this in browser
import thunk from 'redux-thunk'; //another middlerware for axios
import {composeWithDevTools} from 'redux-devtools-extension';

// const store=createStore(rootReducer,applyMiddleware(logger))
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store