import "./App.css"
import { Category } from "./Category";
import { TopSelling } from "./TopSelling";
import { NextTrip } from "./NextTrip";
import Choose from "./Choose";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import { Home } from "./Home";

function App() {
  return (
    <div className="app">

      <Home/>
      <Category/>
      <TopSelling/>
      <NextTrip/>
      <Choose/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;


