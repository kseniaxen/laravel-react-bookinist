import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import User from './views/User';
import UserLayout from './components/UserLayout';
import AdminLayout from './components/AdminLayout'
import NotFound from './views/NotFound';
import Main from './views/Main';
import FAQ from './views/FAQ';
import GuestLayout from './components/GuestLayout';
import Catalog from './views/Catalog';
import Book from './views/Book';
import Contacts from './views/Contacts';
import About from './views/About';
import BookFormAdd from './views/BookUser/BookFormAdd';
import BookFormUpdate from './views/BookUser/BookFormUpdate';
import Admin from './views/Admin';
import CityFromAdd from './views/CityAdmin/CityFormAdd';
import CityFromUpdate from './views/CityAdmin/CityFromUpdate';
import GenreFormAdd from './views/GenreAdmin/GenreFormAdd';
import GenreFormUpdate from './views/GenreAdmin/GenreFormUpdate';
import Cart from './views/Cart';
import Purchase from './views/Purchase';

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
        path: '/about',
        element: <About />
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
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/purchase',
        element: <Purchase />
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: '/user',
                element: <User />
            },
            {
                path: '/user/books/new',
                element: <BookFormAdd key="bookCreate" />
            },
            {
                path: '/user/books/edit/:id',
                element: <BookFormUpdate key="bookUpdate" />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <Admin />
            },
            {
                path: '/admin/cities/new',
                element: <CityFromAdd key="cityCreate" />
            },
            {
                path: '/admin/cities/edit/:id',
                element: <CityFromUpdate key="cityUpdate" />
            },
            {
                path: '/admin/genres/new',
                element: <GenreFormAdd key="genreCreate" />
            },
            {
                path: '/admin/genres/edit/:id',
                element: <GenreFormUpdate key="genreUpdate" />
            },
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