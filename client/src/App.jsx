// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/sign-in" element={<SignIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/profile" element={<Profile />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
