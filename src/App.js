import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./components/landing";
import { Chatting } from "./components/chatting/chatting";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/chatting",
      element: <Chatting />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
