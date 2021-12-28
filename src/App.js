import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Components/404PageComponent/404Page';
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  useRoutes,
} from "react-router-dom";
import AunthenticationPage from './Pages/Authentication';

import PasswordLoginPage from './Pages/PasswordLoginPage';

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/sign-in", element: <AunthenticationPage /> },
     {path:'/password', element:<PasswordLoginPage/>},
    { path: "/", element: <Navigate replace to="/" /> },
    { path: "*", element: <NotFoundPage /> }
  ]);
  return routes;
};
const App = () => {
   
   return (
     <Router>
       <AppWrapper/>
     </Router>
   );
}

export default App;
