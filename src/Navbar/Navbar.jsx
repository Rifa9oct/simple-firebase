import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-3xl text-center font-bold mt-20">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isActive? "active text-blue-600 underline mr-6": isPending? "pending": ""}>Home</NavLink>
            <NavLink to="/login" className={({ isActive, isPending }) =>
                isActive? "active text-blue-600 underline ml-6": isPending? "pending": ""}>Login</NavLink>
        </div>
    );
};

export default Navbar;