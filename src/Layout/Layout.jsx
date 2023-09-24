import { Outlet } from "react-router-dom";
import Navbar from "../assets/Components/Header/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="container mx-auto">

            <header className="my-5 p-2 ">
                <Navbar ></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default Layout;