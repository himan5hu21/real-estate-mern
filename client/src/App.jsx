// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import PrivateRoute from "./components/PrivateRoute";
// import AddProperty from "./pages/AddProperties";
// import Error from "./pages/Error";
// import Properties from "./pages/Properties";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/sign-in" element={<SignIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/properties" element={<Properties />} />
    //     <Route
    //       path="/profile"
    //       element={
    //         <PrivateRoute>
    //           <Profile />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route
    //       path="/addProperty"
    //       element={
    //         <PrivateRoute>
    //           <AddProperty />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </BrowserRouter>

    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}

export default App;
