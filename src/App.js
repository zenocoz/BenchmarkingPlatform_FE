import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./components/Home/Home"
import Exam from "./components/Exam/Exam"

import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/exam">
        <Exam />
      </Route>
      <Route exact path="/stats"></Route>
    </Router>
  )
}

export default App
