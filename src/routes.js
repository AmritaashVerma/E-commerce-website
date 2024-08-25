import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/iphone15";

export const Routes = () => {
    return (
        <Router>
            <Route exact path="/iphone15"> 
                <Home/>
            </Route>
        </Router>
    )
}