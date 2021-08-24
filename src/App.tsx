import { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Search from "./components/search/search";
import Settings from "./components/settings/settings";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/settings" component={Settings} />
            <Route component={Home} />
          </Switch>
        </div>

        <footer className="bottomNavigation">
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction
              component={Link}
              to="/"
              label="Home"
              value="Home"
              icon={<HomeIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/search"
              label="Search"
              value="Search"
              icon={<SearchIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/settings"
              label="Settings"
              value="Settings"
              icon={<SettingsIcon />}
            />
          </BottomNavigation>
        </footer>
      </Router>
    </div>
  );
}

export default App;
