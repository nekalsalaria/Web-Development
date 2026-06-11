import {Link} from "react-router-dom";
const Navabar = () => {
  return (
    <div>
      <nav className="flex space-x-4 bg-gray-800 p-4 text-white">
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navabar;
