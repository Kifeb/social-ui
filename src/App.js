import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import LeftBar from "../src/components/LeftBar"
import RightBar from "../src/components/RightBar"
import Navbar from "../src/components/Navbar"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"


function App() {

  const {currentUser} = useContext(AuthContext)


  const Layout = () => {
    return (
    <div>
      <Navbar />
      <div style={{display: 'flex'}}>
        <LeftBar />
        <div style={{flex: 6}}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  )}

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
