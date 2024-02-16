import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../app/App";
import Cart from "../cart/Cart";
import HomePage from "../homePage/HomePage";
import Store from "../store/Store";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "homepage",
          element: <HomePage />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
