import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./components/landing";
import { Chatting } from "./components/chatting/chatting";
import { MainProvider } from "./services/main.context";
import { LoginPage } from "./components/auth/login.page";
import { SignUpPage } from "./components/auth/signup.page";

function App() {
  // a router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/chatting",
      element: <Chatting />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
}

export default App;
