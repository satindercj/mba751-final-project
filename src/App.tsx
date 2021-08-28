import { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import WatchListIcon from "@material-ui/icons/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Search from "./components/search/search";
import WatchList from "./components/watchList/watchList";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#728a8e",
    "&$selected": {
      color: "#05a3d2",
    },
  },
  selected: {},
}));

function App() {
  const [value, setValue] = useState(0);

  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/watch-list" component={WatchList} />
            <Route component={Home} />
          </Switch>
        </div>

        <footer className="bottomNavigation">
          <Paper elevation={3} variant="outlined">
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
                classes={classes}
                icon={<HomeIcon />}
              />

              <BottomNavigationAction
                component={Link}
                to="/search"
                label="Search"
                value="Search"
                classes={classes}
                icon={<SearchIcon />}
              />

              <BottomNavigationAction
                component={Link}
                to="/watch-list"
                label="Watch List"
                value="Watch List"
                classes={classes}
                icon={<WatchListIcon />}
              />
            </BottomNavigation>
          </Paper>
        </footer>
      </Router>
    </div>
  );
}

export default App;
