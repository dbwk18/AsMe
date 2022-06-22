import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import rootReducer from './services/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
