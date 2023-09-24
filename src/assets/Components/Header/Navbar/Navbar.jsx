import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <div>
                <img className="w-32" src='https://i.ibb.co/xKbXzcs/Logo.png' alt="" />
            </div>

            <ul className="flex gap-5">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-rose-700 font-medium  underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-rose-700 font-medium  underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-rose-700 font-medium underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;