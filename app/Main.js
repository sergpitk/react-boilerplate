import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FormWithState from './components/FormWithState'




function Main() {
    return (
       <FormWithState />
    )
}

ReactDom.render(<Main />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept;
}
