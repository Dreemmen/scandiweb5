import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
const express = require('express');
//import { productsController } from './controllers/products'


const express_app = express()

express_app.post('/services/products/getProducts', ( /*request, response*/) => {
  //var products = new productsController();
  //products.selectAll(request, response);
})

express_app.listen(3001, () => {
  console.log('Express app listening on port 3001.');
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
