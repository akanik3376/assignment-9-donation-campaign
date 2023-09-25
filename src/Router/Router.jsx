import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/HomePage/Home';
import Donation from '../Pages/DonationPage/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/public/data.json")
            },
            {
                path: "/Donation",
                element: <Donation></Donation>
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>
            },
        ]
    }
])


export default route;