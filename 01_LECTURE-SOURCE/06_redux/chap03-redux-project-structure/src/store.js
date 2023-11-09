import rootReducer from "./modules";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import ReduxLogger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    composeWithDevTools (applyMiddleware(ReduxThunk, ReduxLogger))
);

export default store;