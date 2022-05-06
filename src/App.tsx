
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
        <div className='container-fluid gx-0'>
            <Header />
        </div>

        <div className="container pt-4">
            <Route exact path='/' >
                <Home />
            </Route>
        </div>
    </Router>
)
}

export default App;
