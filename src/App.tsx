import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import HomePage from "./Pages/Home";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <HomePage /> },
        ...Router,
        {
          path: "*",
          name: "noMatch",
          element: <HomePage />,
        },
      ])}
    />
  );
}

export default App;
