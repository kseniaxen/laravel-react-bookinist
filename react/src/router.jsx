import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import User from './views/User';
import UserLayout from './components/UserLayout';
import NotFound from './views/NotFound';
import Main from './views/Main';
import FAQ from './views/FAQ';
import GuestLayout from './components/GuestLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/faq',
        element: <FAQ />
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: '/user',
                element: <User />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;