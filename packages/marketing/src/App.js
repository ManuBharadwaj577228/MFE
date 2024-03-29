import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

function App() {
    return (
        <div>
           <StylesProvider>
           <BrowserRouter>
           <Switch>
           <Route exact path="/pricing" component={Pricing}/>
           <Route path="/" component={Landing}/>
           </Switch>
           </BrowserRouter> 
           </StylesProvider>
        </div>
    )
}

export default App
