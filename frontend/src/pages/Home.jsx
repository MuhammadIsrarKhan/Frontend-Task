import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-32 ml-5">
      <h6>Black Friday in july</h6>
      <h1>Up to 50% off</h1>
      <h4>Hundreds of styles available</h4>
      <NavLink
        to="/store"
        className="mt-3 bg-black text-white px-6 py-3 block w-fit"
      >
        SHOP NOW
      </NavLink>
    </div>
  );
};

export default Home;
