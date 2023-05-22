import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Details } from "./pages/DetailtsPoster"

export const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/estagio-itegra/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
  ])

  return <RouterProvider router={router} />
}
