import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app.js';

$(function(){
    window.console && window.console.log('The code is messy, not worth to read.');

    var reactState = JSON.parse(document.getElementById('initReactState').innerHTML);
    window.app = ReactDom.render(
        React.createElement(App, reactState),
        $('#app')[0]
    );
});
