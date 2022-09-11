import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div>
      <p>Home</p>
      <Link to="/add/header" className="text-green-500">
        Create Header
      </Link>
    </div>
  );
};

export default HomePage;
