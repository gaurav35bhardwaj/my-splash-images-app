import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import { NotFound } from '../Layouts';
import { Dashboard, View, Remove } from '../Scenes'



 export default class NestedRoutes extends Component{
    
     render(){
        return(
            <Switch>
                <Route exact path={'/dashboard'} component={Dashboard} />
                <Route exact path={'/dashboard/view'} component={View} />
                <Route exact path={'/dashboard/remove'} component={Remove} />
                <Route path="*" component = {NotFound} />
            </Switch>
        );
     };
      
 }