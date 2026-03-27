import Home from "../pages/Home";
import LayoutDefault from "../Layout/LayoutDefault";
import PrivateRoutes from "../components/PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Topic from "../pages/topic";
import Answers from "../pages/Answers";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "topic",
        element: <Topic />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "answers",
            element: <Answers />,
          },
          {
            path: "quiz",
            element: <Quiz />,
          },
          {
            path: "result",
            element: <Result />,
          },
        ],
      },
    ],
  },
]
