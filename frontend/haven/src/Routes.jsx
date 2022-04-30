import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Login from "./pages/Login";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />}/>
        <Route path="/options" element={<Options />}/>
        <Route path="/login" element={<Login />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;