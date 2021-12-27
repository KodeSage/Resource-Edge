import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Components/404PageComponent/404Page';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";


const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
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
