import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import User from './views/User';
import UserLayout from './components/UserLayout';
import NotFound from './views/NotFound';
import Main from './views/Main';
import FAQ from './views/FAQ';
import GuestLayout from './components/GuestLayout';
import Catalog from './views/Catalog';
import Book from './views/Book';
import Contacts from './views/Contacts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/catalog',
        element: <Catalog />
    },
    {
        path: '/faq',
        element: <FAQ />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
    {
        path: '/books/:id',
        element: <Book />
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