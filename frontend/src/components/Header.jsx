import { useEffect } from "react";
import { Collapse, Dropdown, initTE, Sidenav } from "tw-elements";
import Logo from "@/assets/images/RandoStore.png";
import { Link, NavLink } from "react-router-dom";
import cart from "@/assets/cart.svg";
import { useStore } from "../hooks/useStore";
const Header = () => {
  const { state } = useStore();
  useEffect(() => {
    initTE({ Collapse, Dropdown, Sidenav });
  });
  return (
    <>
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-transparent py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navigation container --> */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto lg:justify-between"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            {/* <!-- Logo --> */}
            <NavLink
              to="/"
              className="mb-4 ml-2 mr-5 mt-3 items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900  dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 !block"
            >
              <img
                src={Logo}
                //   style="height: 15px"
                className="w-24 box-content"
                alt="TE Logo"
                loading="lazy"
              />
            </NavLink>
            {/* <!-- Left navigation links --> */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row gap-3 ml-3"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                {/* <!-- Dashboard link --> */}
                <NavLink
                  to="/"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none lg:px-2"
                  href="#"
                  data-te-nav-link-ref
                >
                  Home
                </NavLink>
              </li>
              {/* <!-- Team link --> */}
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <NavLink
                  to="/store"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Store
                </NavLink>
              </li>
              {/* <!-- Projects link --> */}
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <NavLink
                  to="/add-item"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Add Item
                </NavLink>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <NavLink
                  to="/cart"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/cart" className="relative flex items-center mr-10">
            <img
              src={cart}
              alt="cart"
              className="w-[30px] h-[30px] bg-white p-1 rounded-xl"
            />
            <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center absolute -right-3 -top-2">
              <small className="text-[8px] font-semibold">
                {state.items.length}
              </small>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
