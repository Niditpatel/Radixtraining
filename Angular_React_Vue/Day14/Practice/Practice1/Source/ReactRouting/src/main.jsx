import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Contact,{loader as contactLoader} from "./routes/contact";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root,{loader as rootLoader,action as rootAction} from "./routes/root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
    children:[
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader:contactLoader
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);