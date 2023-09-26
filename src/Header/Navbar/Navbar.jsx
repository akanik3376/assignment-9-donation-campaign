import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex mt-5 mb-10 justify-between items-center">
            <img className="w-48" src="https://i.ibb.co/h7rQypP/Logo.png" alt="" />
            <ul className="flex gap-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline font-semibold" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline font-semibold" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline font-semibold" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;