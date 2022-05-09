import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import RegisterReport from './pages/RegisterReport';
import MapPage from './pages/MapPage';
import UserOptions from './pages/UserOptions';


const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />}/>
        <Route path="/options" element={<Options />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegisterUser />}/>
        <Route path="/report" element={<RegisterReport />}/>
        <Route path="/map" element={<MapPage/>}/>
        <Route path="/user" element={<UserOptions/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;