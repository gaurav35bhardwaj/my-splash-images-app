import React from 'react';
import {  Route, Switch} from "react-router-dom";
import PublicRoutes from './PublicRoutes.js';
import PrivateRoutes from './PrivateRoutes.js'
import { NotFound } from '../Layouts'


 const MainRoutes = (props) => {
  return(
    <Switch>
      <PublicRoutes exact path = "/"  /> 
      <PrivateRoutes  path = "/dashboard"  /> 
      <Route path="*" component = {NotFound} />
    </Switch>
  );
    
    
 }
export default MainRoutes;
