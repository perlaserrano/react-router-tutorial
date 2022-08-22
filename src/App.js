import  {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import UserPages from "./pages/UserPages";
import NotFoundPages from "./pages/NotFoundPages";

export default function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePages/>}/>
    <Route path="/about" element={<AboutPages/>}/>
    <Route path="/user" element={<UserPages/>}/>
    <Route path="*" element={<NotFoundPages/>}/>

    </Routes>
    </BrowserRouter>
  );
}

