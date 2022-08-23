import  {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import UserPages from "./pages/UserPages";
import NotFoundPages from "./pages/NotFoundPages";
import NavBar from "./components/NavBar";
import UsersPages from "./pages/UsersPages";
import Dashboard from "./pages/Dashboard";

export default function App () {
  return (

    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path="/" element={<HomePages/>}/>
    <Route path="/about" element={<AboutPages/>}/>
    <Route path="/users" element={<UsersPages/>}/>
    <Route path="/usuarios" element={<Navigate to="/users"/>}/>
    <Route path="/user/:id" element={<UserPages/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="*" element={<NotFoundPages/>}/>
    </Routes>
    </BrowserRouter>
  );
}

