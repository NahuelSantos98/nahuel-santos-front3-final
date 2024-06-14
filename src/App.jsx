
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Favs from './pages/Favs'
import { ContextProvider } from "./Components/context/global.context";
import routes from "./routes/routes";

function App() {
  return (
      <div className="App">
        <ContextProvider>
            <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path={routes.home} element={<Home />} />
                  <Route path={routes.contact}element={<Contact />} />
                  <Route path={routes.detail} element={<Detail/>}/>
                  <Route path={routes.favs} element={<Favs />} />
                </Routes>
              <Footer/>
            </BrowserRouter>
          </ContextProvider>
      </div>
  );
}

export default App;
