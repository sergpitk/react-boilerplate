import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function Main() {
  

    return (
       <div>
         <h1>First React App !</h1>
       </div>
    )
}

ReactDom.render(<Main />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept;
}
