
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Donation',
                element: <Donation></Donation>
            },
            {
                path: '/Statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default route;