import {Redirect, Route,Switch} from "react-router-dom";
import React from "react";
import Details from "./screens/details/Details";
import Home from "./common/home/Home";
function App(){
    return(
        <div>
            <Switch>
            <Route path="/Details/:id" component={Details}></Route>
        <Route path="/Home" component={Home}></Route>
    
    <Redirect to="/Home"></Redirect>
    </Switch>
    </div>
    )

}
export default App;