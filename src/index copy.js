import ReactDom from "react-dom";
import App from "./App8";
import store from './store';
import {Provider} from 'react-redux'

// ReactDom.render(组件名称，要注入的元素)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
