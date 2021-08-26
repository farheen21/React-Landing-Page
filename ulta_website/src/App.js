import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Home from './pages/HomePage/Home';
import { Navbar , Footer} from './components';
import SignUp from "./pages/SignUp/SignUp";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
   <Router>
     <GlobalStyle />
     <ScrollToTop />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Services" exact component={Services} />
      <Route path="/Products" exact component={Products} />
      <Route path="/SignUp" exact component={SignUp} />
    </Switch>
    <Footer />
   </Router>
  );
}

export default App;
