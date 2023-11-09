import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store"; //이거!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> {/*store로 부터 가져와서 적용시킴*/}
        <App />
    </Provider>
);

