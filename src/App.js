import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import NoMatch from './components/NoMatch/NoMatch';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
         <Home/>
       </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/work">
          <Work></Work>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
       <Route path="*">
         <NoMatch></NoMatch>
       </Route>

       
      </Switch>

    </Router>
  );
}

export default App;
