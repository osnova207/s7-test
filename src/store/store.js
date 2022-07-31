import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import ApiService from '../classes/api-service';

const composeEnhancers = composeWithDevTools({
    trace: true,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(new ApiService()))));

export default store;
