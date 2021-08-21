import './App.scss';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar/>

        <div className="container">
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/blogs">
              <Home/>
            </Route>
            <Route exact path="/create">
              <CreateBlog/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>


      </div>

    </Router>
    
  );
}

export default App;
