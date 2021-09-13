import "./App.css";
import Banner from "./components/Banner/Banner";
import Feed from "./pages/Feed/Feed";
// import { Switch, Route } from "react-router-dom"
// import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Banner />
      <Feed />
      {/* <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        <Route strict exact path="/followers" component={FollowersPage}/>
      </Switch> */}
    </div>
  );
}

export default App;
