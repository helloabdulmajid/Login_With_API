import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/contact/Contact";
import AddPost from "./pages/AddPost";
import Dasboard from "./pages/Dasboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          
            <Route path="post/addpost" element={<AddPost />} />

            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />

            <Route path="contact" element={<Contact />} />
            <Route path="login/dasboard" element={<Dasboard/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
