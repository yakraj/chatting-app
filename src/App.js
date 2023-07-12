import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./components/landing";
import { Chatting } from "./components/chatting/chatting";
import { MainProvider } from "./services/main.context";

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
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
}

export default App;
