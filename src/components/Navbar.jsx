import { Link } from "react-router-dom";
// import consoleIcon from "../assets/console-icon.svg";
import consoleIconWhite from "../assets/console-icon-white.svg";
import { CaretDown, CaretUp, ShoppingCart, UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleNavActive);
    };
  }, []);

  function onDropdownClick() {
    setDropdownActive((prev) => !prev);
  }

  function handleNavActive() {
    setNavActive((prev) => !prev);
  }

  const navVars = {
    initial: { y: -800 },
    animate: { y: 0, transition: { duration: 0.4 } },
    exit: { y: -800, transition: { duration: 0.4 } },
  };

  return (
    <nav className="bg-neutral-950 fixed top-0 left-0 right-0 h-[80px] flex justify-center sm:h-28 text-white z-30">
      <div className="z-50 absolute right-7 top-[28px] sm:top-11 sm:hidden">
        <button onClick={() => handleNavActive()}>
          <div>
            <span
              className={`${
                navActive ? "rotate-[-45deg] translate-y-[15px]" : ""
              } h-[2px] bg-white w-7 block mb-2 duration-300`}
            ></span>
          </div>
          <div>
            <span
              className={`${
                navActive ? "opacity-0" : ""
              } h-[2px] bg-white w-7 block mb-2 duration-300`}
            ></span>
          </div>
          <div>
            <span
              className={`${
                navActive ? "rotate-45 translate-y-[-5px]" : ""
              } h-[2px] bg-white w-7 block duration-300`}
            ></span>
          </div>
        </button>
      </div>
      <div className="flex  justify-between w-[1700px] items-center">
        <Link to="/">
          <div className="flex justify-center items-center gap-x-3 sm:gap-x-5 pl-6">
            <img
              src={consoleIconWhite}
              alt="console icon img"
              className="h-11 sm:h-14"
            />
            <p className="text-lg sm:text-2xl font-bold">ARCADE</p>
          </div>
        </Link>
        <AnimatePresence>
          {navActive && (
            <motion.ul
              variants={navVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex origin-top flex-col sm:flex-row pt-36 sm:pt-0 sm:justify-center items-center bg-black absolute inset-0 sm:relative gap-y-7 sm:gap-y-4 text-2xl font-semibold sm:font-medium sm:text-base h-screen w-screen sm:h-full sm:w-[500px] sm:bg-transparent sm:flex sm:gap-x-6 sm:items-center z-40"
            >
              <div className="relative ">
                <div className="flex justify-center items-center gap-x-2 pl-6">
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                  {dropdownActive ? (
                    <CaretUp
                      onClick={() => onDropdownClick()}
                      size={20}
                      weight="fill"
                      className="hover:cursor-pointer"
                    />
                  ) : (
                    <CaretDown
                      onClick={() => onDropdownClick()}
                      size={20}
                      weight="fill"
                      className="hover:cursor-pointer"
                    />
                  )}
                </div>
                {dropdownActive && (
                  <div
                    onClick={() => setDropdownActive(false)}
                    className="items-center sm:absolute sm:bg-neutral-950 px-3 top-12 flex flex-col sm:gap-y-2 gap-y-8 sm:py-3 pb-1 pt-7 right-0 sm:w-32 sm:items-start"
                  >
                    <li>
                      <Link to="/topProduct">Top Products</Link>
                    </li>
                    <li>
                      <Link to="/games">Games</Link>
                    </li>
                    <li>
                      <Link to="/consoles">Consoles</Link>
                    </li>
                    <li>
                      <Link to="/controller">Controller</Link>
                    </li>
                    <li>
                      <Link to="/accessoires">Accessoires</Link>
                    </li>
                  </div>
                )}
              </div>
              <li>
                <Link to="/onSale">On Sale</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <div className="font-light flex pr-10 items-center absolute sm:relative sm:top-0 top-6 sm:justify-center gap-x-2 sm:pl-2 sm:pr-6">
                <UserCircle size={34} weight="fill" />
                <p>Anmelden</p>
                <ShoppingCart size={30} className="sm:relative" />
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
