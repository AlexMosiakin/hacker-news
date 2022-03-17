import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const defaultId = {
    ClickedId: 0,
}

const reducer = (state = defaultId, action) => {
    switch(action.type) {
        case "GET_ID":
            return {...state, ClickedId: action.payload}
        default :
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);


