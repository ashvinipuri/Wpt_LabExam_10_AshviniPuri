import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Show from "./components/Show";
import Add from "./components/Add";

const projectroute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "addpage",
        element: <Add />,
      },
      {
        path: "showpage",
        element: <Show />,
      },
      {
        path: "deletepage",
        element: <Delete />,
      },
    ],
  },
]);

export default projectroute;
