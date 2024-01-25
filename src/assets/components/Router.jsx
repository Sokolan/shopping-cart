import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Cart from "./Cart";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Shop from "./Shop";

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
          path: "shop",
          element: <Shop />,
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