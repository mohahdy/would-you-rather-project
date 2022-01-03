import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'
const store = createStore(reducer, middleware);
class ProviderApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    )
  }
}ReactDOM.render(
    <ProviderApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
