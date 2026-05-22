import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import Dashboard from "@/features/dashboard/Dashboard.tsx";
import PublicLayout from "@/layouts/PublicLayout.tsx";
import LoginPage from "@/features/auth/Login.page";
import RegisterPage from "@/features/auth/Register.page";
import HomePage from "@/features/home/Home.page";
import ProjectsPage from "@/features/projects/Projects.page.tsx";
import Investments from "@/features/investments/Investments.tsx";
import Profile from "@/features/profile/Profile.tsx";
import Notfound from "@/components/Notfound";
import { publicLoader, authLoader } from "./loaders.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    loader: publicLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <AuthLayout />,
    loader: authLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "investments",
        element: <Investments />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
