import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import './foundation-icons/foundation-icons/foundation-icons.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('mobile'));

document.querySelector('#overlay')
    .addEventListener('click', function(){
        document.querySelector('.bottom-sheet').style.marginBottom = '-100%';
        document.querySelector('#overlay').style.display = 'none';
    })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
