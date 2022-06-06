import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Signup,
  Welcome,
  Login,
  Expense,
  Create,
  Edit
  
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Welcome />} />
     
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/expense" element={<Expense />}/>
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
        {/* <Route path=":postSlug" element={<Post />} /> */}
        {/* <Route path=":postSlug" element={<Post />} /> */}
      {/* </Route> */}
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
