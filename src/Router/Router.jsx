import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DonationPage from '../Pages/DonationPage/DonationPage';
import StatisticsPage from '../Pages/StatisticsPage/StatisticsPage';
import HomePage from '../Pages/HomePage/HomePage';
import ViewDetailsCard from '../Components/ViewDetailsCard/ViewDetailsCard';

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch("/public/data.json")
            },
            {
                path: "/Donation",
                element: <DonationPage></DonationPage>
            },
            {
                path: "/Statistics",
                element: <StatisticsPage></StatisticsPage>
            },
            {
                path: "/ViewDetailsCard/:id",
                element: <ViewDetailsCard></ViewDetailsCard>,
                loader: () => fetch("/public/data.json")
            },

        ]
    }
])


export default route;