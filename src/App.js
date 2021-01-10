import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/exam"></Route>
      <Route path="/stats"></Route>
    </Router>
  )
}

export default App
