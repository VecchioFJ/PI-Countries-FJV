import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./redux/store"
import "./index.css"

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)

// Views (Componentes principales que encierran otros componentes)

// Landing page
// Home (con cards de los countries)
// Detail (de cada pais)
// Form para ingresar las activities

