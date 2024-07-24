import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; /* ./App을 가져옴 */
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /* render: 그림을 그린다는 뜻 // ./App을 가상 돔(버츄얼 돔)에 그려줌 */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
