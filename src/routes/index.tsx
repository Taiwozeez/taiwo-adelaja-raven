import Layout from '../layout/index'; 
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Article from '../pages/Article';
import Signin from '../pages/Sign-in';
import Signup from '../pages/sign-up';
import ResetPassword from '../pages/reset-password';
import ResetPassword2 from '../pages/reset-password2';
import OtpVerification from '../pages/otp-verification';


// Define the type for the route configuration
interface RouteConfig {
  element: React.ReactNode;
  children?: { index?: boolean; path?: string; element: React.ReactNode }[];
}

// Define the routes array
const routes: RouteConfig[] = [
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { index: true, element: <Home /> },  // Home page
      { path: 'blog', element: <Blog /> }, // Blog page
      { path: 'Article', element: <Article /> },
      { path: 'Sign-in', element: <Signin /> },
      { path: 'Sign-up', element: <Signup /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'reset-password2', element: <ResetPassword2 /> },
      { path: 'otp-verification', element: <OtpVerification /> },
    ],
  },
];

export const router = createBrowserRouter([...routes]);
