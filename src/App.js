import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './components/FriendDetails/FriendDetail';


function App() {
  
  return (
    <Router>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/friend/:friendId">
           <FriendDetail></FriendDetail>
         </Route>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="*">
            <NoMatch />
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
