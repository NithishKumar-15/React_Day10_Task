import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import store from  "./Store/store.js"
import ProductComp from "./ProductComp"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductComp></ProductComp>
    </Provider>
  </React.StrictMode>,
)
