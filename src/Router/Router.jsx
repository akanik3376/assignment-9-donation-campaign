import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/HomePage/Home';
import Donation from '../Pages/DonationPage/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ViewDetailsCard from '../Components/ViewDetails/ViewDetailsCard';

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
            {
                path: "/ViewDetails/:id",
                element: <ViewDetailsCard></ViewDetailsCard>,
                loader: () => fetch("/public/data.json")
            },
        ]
    }
])


export default route;