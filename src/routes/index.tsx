import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Details from "../components/details/Details";

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <div>Dashboard</div>,
    },
    {
      path: "/cars/:id",
      element: <Details />,
    },
  ]);
};

export default RouteController;
