import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import MainLayout from "./layout/MainLayout";
import Profile from "./pages/Profile";
import AuthProvider from "./context/Auth";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          
          </Route>  
          <Route element={<PrivateRoute />}>
              {" "}
              <Route path="/profil" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
