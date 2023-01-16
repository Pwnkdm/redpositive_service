import "./App.css";
import Homepage from "./pages/Homepage";
import Footer from "./Componants/Footer";
import Navbar from "./Componants/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getdataApi } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdataApi());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
